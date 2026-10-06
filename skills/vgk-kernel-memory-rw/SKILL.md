---
name: vgk-kernel-memory-rw
description: Stealthy kernel-mode R/W for Vanguard/EAC -- kWalk manual page table walking (avoids KeStackAttachProcess), MDL PFN remap write for read-only pages, HVCI-safe DTB-based address translation.
---

# Kernel Memory R/W Without KeStackAttachProcess

## Why Not KeStackAttachProcess

EAC and Vanguard register `ObRegisterCallbacks` and `PsSetCreateProcessNotifyRoutine`. `KeStackAttachProcess` is well-known and easily monitored via NMI stack walking (threads outside module range = flag). Under HVCI, it also fails on certain memory regions.

## kWalk: Page Table Walk

```cpp
namespace kWalk {
    constexpr UINT64 PhysMask = 0x0000FFFFFFFFF000;
    constexpr UINT64 BitV = 0x1;   // valid
    constexpr UINT64 BitL = 0x80;  // large page
}
```

### DTB (Directory Table Base) Auto-Resolve

Avoids hardcoded Windows version offsets:
1. Get `MmCopyMemory` via `MmGetSystemRoutineAddress`.
2. Iterate `PsInitialSystemProcess` offsets `0x10..0x200` step 8.
3. For each candidate: apply bit masks, try `TranslateEx(VA_of_MmCopyMemory, candidate)`.
4. If physical address resolves correctly -> this is the DTB offset. Cache it.

```cpp
UINT64 VAT = (UINT64)MmCopyMemory;
for (ULONG i = 0x10; i < 0x200; i += 8) {
    UINT64 Elect = *reinterpret_cast<UINT64*>((PUCHAR)SystemProcess + i);
    if ((Elect & 0xFFFFF00000000000) != 0) continue;
    if ((Elect & 0xFFFFFFFFFFFFF000) == 0) continue;
    if (TranslateEx(VAT, Elect) != 0) { DTB = i; break; }
}
```

### Address Translation (PML4 -> PDPT -> PD -> PT)

Uses `MmCopyMemory` with `MM_COPY_MEMORY_PHYSICAL` flag to read page table entries without touching CR3:

```cpp
UINT64 TranslateEx(UINT64 VA, UINT64 Base) {
    UINT64 Dir = Base & PhysMask;
    // PML4E
    UINT64 PML4E = TableEntry(Dir + ((VA >> 39 & 0x1FF) * 8));
    if (!(PML4E & BitV)) return 0;
    // PDPTE
    UINT64 PDPTE = TableEntry((PML4E & PhysMask) + ((VA >> 30 & 0x1FF) * 8));
    if (!(PDPTE & BitV)) return 0;
    if (PDPTE & BitL) return (PDPTE & 0xFFFFFC0000000) + (VA & 0x3FFFFFFF); // 1GB
    // PDE
    UINT64 PDE = TableEntry((PDPTE & PhysMask) + ((VA >> 21 & 0x1FF) * 8));
    if (!(PDE & BitV)) return 0;
    if (PDE & BitL) return (PDE & 0xFFFFFFFE00000) + (VA & 0x1FFFFF); // 2MB
    // PTE
    UINT64 PTE = TableEntry((PDE & PhysMask) + ((VA >> 12 & 0x1FF) * 8));
    if (!(PTE & BitV)) return 0;
    return (PTE & PhysMask) + (VA & 0xFFF);
}
```

### Read

Chunk by page (4KB) boundaries — never cross physical page boundary:
```cpp
while (Left > 0) {
    UINT64 PA = Translate(Address + Off);
    UINT64 PO = PA & 0xFFF;
    SIZE_T Bytes = min(0x1000 - PO, Left);
    MM_COPY_ADDRESS Src; Src.PhysicalAddress.QuadPart = PA;
    MmCopyMemory(Dest + Off, Src, Bytes, MM_COPY_MEMORY_PHYSICAL, &TX);
    Left -= Bytes; Off += Bytes;
}
```

### Write (MDL PFN Remap)

Bypasses `STATUS_ACCESS_DENIED` on read-only / protected pages:
1. Allocate dummy NonPaged page + MDL over it.
2. `MmBuildMdlForNonPagedPool(Mdl)` to populate PFN array.
3. Translate target VA to physical -> get target PFN.
4. **Swap** `MmGetMdlPfnArray(Mdl)[0]` to target PFN.
5. `MmMapLockedPagesSpecifyCache(Mdl, KernelMode, MmCached, ...)` -> kernel VA mapped to target physical.
6. `RtlCopyMemory` through the mapped VA.
7. Unmap, restore original PFN, repeat for next page.

```cpp
PFN_NUMBER Original = Array[0];
Array[0] = (PFN_NUMBER)(PA >> 12);  // target PFN
PVOID VAM = MmMapLockedPagesSpecifyCache(Mdl, KernelMode, MmCached, NULL, FALSE, NormalPagePriority);
if (VAM) { RtlCopyMemory((PUCHAR)VAM + PO, Src + Off, Bytes); MmUnmapLockedPages(VAM, Mdl); }
Array[0] = Original;
```

## HVCI: DTB-Based Translation

Under HVCI, `MmCopyVirtualMemory` reads in System context (wrong CR3). Solution:

```cpp
uint64_t dtb = GetProcessDtb(valorant_pid);  // PsLookupProcessByProcessId -> EPROCESS + DTB offset
uint64_t phys = TranslateAddress(dtb, virtual_address);
ReadPhysical(phys, &buffer, size);  // via MmCopyMemory PHYSICAL or MmMapIoSpace
```

Manual translation pseudocode (same PML4 walk as kWalk above).

**Avoid `KeStackAttachProcess`** — detected by VGK/EAC via stack walk callback (`PsSetCreateProcessNotifyRoutineEx`). NMI stackwalk sees return address outside any loaded module -> flag.

## Detection Vectors for kWalk Itself

- `BigPoolTable`: large pool allocation visible to AC kernel scanners.
- Stack: code not in any module -> NMI stackwalk flag.
- Fix: load via DSE bypass (NtLoadDriver) so driver is a legitimate module, or use pool stealth (hv_stealth).