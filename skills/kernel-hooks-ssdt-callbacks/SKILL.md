---
name: kernel-hooks-ssdt-callbacks
description: Windows kernel hooking -- SSDT function pointer replacement, inline kernel patching, PsSetCreateProcessNotifyRoutineEx / ObRegisterCallbacks for process/thread/image monitoring. Offensive + defensive angles.
metadata:
  type: reference
---

# Windows Kernel Hooks, SSDT, and Kernel Callbacks

Three categories of kernel-level interception: SSDT hooking (legacy, pre-PatchGuard),
inline kernel patching, and the modern callback registration API used by every EDR.

## 1. SSDT Hooking

The **System Service Descriptor Table** maps syscall numbers to kernel function pointers.
When user-mode calls `NtCreateFile` (syscall 0x55), the kernel indexes into the SSDT and
calls `nt!NtCreateFile`.

### Structure

```cpp
typedef struct _KSERVICE_TABLE_DESCRIPTOR {
    PULONG  ServiceTableBase;    // array of function offsets (x64: relative offsets)
    PULONG  ServiceCounterTable; // profiling counters (checked builds only)
    ULONG   NumberOfServices;    // entry count (~470 in modern Windows)
    PUCHAR  ArgumentTable;       // per-function stack argument byte count
} KSERVICE_TABLE_DESCRIPTOR;

// KeServiceDescriptorTable[0] = ntoskrnl SSDT
// KeServiceDescriptorTable[1] = win32k SSDT (GDI/User syscalls)
```

### x64 Relative Encoding

On x64 Windows, SSDT entries are **not** raw pointers. They are 4-byte signed offsets:

```
actual_address = ServiceTableBase + (ServiceTableBase[index] >> 4)
argument_count = ServiceTableBase[index] & 0xF
```

This encoding saves memory (4 bytes per entry vs 8) and makes modification harder.

### Hook Installation (Legacy, Pre-PatchGuard)

```cpp
// 1. Locate KeServiceDescriptorTable (exported symbol)
// 2. Disable write protection: clear CR0.WP bit
//    __writecr0(__readcr0() & ~0x10000);
// 3. Replace entry:
//    LONG original_offset = ssdt->ServiceTableBase[syscall_number];
//    LONG hook_offset = ((ULONG_PTR)HookFunction - (ULONG_PTR)ssdt->ServiceTableBase) << 4;
//    hook_offset |= (original_offset & 0xF);  // preserve argument count
//    ssdt->ServiceTableBase[syscall_number] = hook_offset;
// 4. Re-enable WP: __writecr0(__readcr0() | 0x10000);
```

### Why SSDT Hooking Is Dead (Mostly)

- **KPP (Kernel Patch Protection / PatchGuard)**: monitors SSDT, IDT, GDT, MSR, and critical
  kernel structures. Modification triggers `CRITICAL_STRUCTURE_CORRUPTION` BSOD (0x109).
- PatchGuard checks run at random intervals from DPC timers, making bypass timing-dependent.
- x64 Windows requires all kernel code to be signed (KMCS), making arbitrary hook code harder
  to load.

Still relevant: rootkit research, pre-Win10 targets, hypervisor-based SSDT shadowing
(EPT split: execute page has hooks, read page has clean copy).

## 2. Inline Kernel Patching

Patch the first bytes of a kernel function directly, similar to user-mode inline hooking.

```
nt!NtCreateFile:
    Before: 4C 8B DC 49 89 5B 10 ...
    After:  FF 25 00 00 00 00 <8-byte hook address>
```

Same PatchGuard problem applies. EPT-based hypervisor hooks avoid this: the execute view
contains the hooked code while the read view (seen by PatchGuard integrity checks) contains
the original bytes.

## 3. Kernel Callback Registration (Modern / Supported)

Microsoft provides official callback APIs that EDRs, AVs, and monitoring drivers use.
These survive PatchGuard because they are the intended mechanism.

### Process Notifications

```cpp
// Register:
NTSTATUS PsSetCreateProcessNotifyRoutineEx(
    PCREATE_PROCESS_NOTIFY_ROUTINE_EX NotifyRoutine,
    BOOLEAN Remove
);

// Callback prototype:
void ProcessNotifyCallback(
    PEPROCESS Process,
    HANDLE ProcessId,
    PPS_CREATE_NOTIFY_INFO CreateInfo  // NULL on process exit
) {
    if (CreateInfo) {
        // CreateInfo->ImageFileName = NT path of new process image
        // CreateInfo->CreationStatus = set to STATUS_ACCESS_DENIED to block
        // CreateInfo->FileOpenNameAvailable = TRUE if ImageFileName is valid
    }
}
```

Every EDR registers this. Setting `CreateInfo->CreationStatus = STATUS_ACCESS_DENIED` blocks
process creation -- this is how EDRs prevent malware from launching.

### Thread Notifications

```cpp
NTSTATUS PsSetCreateThreadNotifyRoutine(
    PCREATE_THREAD_NOTIFY_ROUTINE NotifyRoutine
);

void ThreadNotifyCallback(HANDLE ProcessId, HANDLE ThreadId, BOOLEAN Create) {
    // Create=TRUE: new thread; Create=FALSE: thread exiting
    // Remote thread creation (ProcessId != current) = injection signal
}
```

### Image Load Notifications

```cpp
NTSTATUS PsSetLoadImageNotifyRoutine(
    PLOAD_IMAGE_NOTIFY_ROUTINE NotifyRoutine
);

void ImageNotifyCallback(
    PUNICODE_STRING FullImageName,
    HANDLE ProcessId,
    PIMAGE_INFO ImageInfo
) {
    // ImageInfo->ImageBase = load address
    // ImageInfo->ImageSize = mapped size
    // Fires for every DLL/EXE load -- EDRs use this to inject their hook DLL
}
```

### Object Callbacks (Handle Filtering)

```cpp
OB_PREOP_CALLBACK_STATUS PreOperationCallback(
    PVOID RegistrationContext,
    POB_PRE_OPERATION_INFORMATION OperationInformation
) {
    // Strip dangerous access rights from process/thread handles
    // e.g., remove PROCESS_VM_WRITE from handles to lsass.exe
    if (is_protected_process(OperationInformation->Object)) {
        OperationInformation->Parameters->CreateHandleInformation
            .DesiredAccess &= ~PROCESS_VM_WRITE;
    }
    return OB_PREOP_SUCCESS;
}

// Register via ObRegisterCallbacks with OB_OPERATION_REGISTRATION
// Requires: altitude string, valid callback, signed driver
```

This is how EDRs prevent `OpenProcess(PROCESS_ALL_ACCESS)` on protected processes.

### Registry Callbacks

```cpp
NTSTATUS CmRegisterCallbackEx(
    PEX_CALLBACK_FUNCTION Function,
    PCUNICODE_STRING Altitude,
    PVOID Driver,
    PVOID Context,
    PLARGE_INTEGER Cookie,
    PVOID Reserved
);
```

Monitors all registry operations. EDRs use this to detect persistence (Run keys,
services, scheduled tasks) and credential access (SAM hive reads).

### Minifilter Callbacks (Filesystem)

```cpp
// FltRegisterFilter + FltStartFiltering
// IRP_MJ_CREATE, IRP_MJ_READ, IRP_MJ_WRITE, IRP_MJ_SET_INFORMATION
// Pre/post operation callbacks on every file operation
```

Monitors file creation, modification, deletion. Used to detect ransomware (mass file
modification pattern) and data exfiltration.

## Offensive: Removing EDR Callbacks

Rootkits and offensive tools remove EDR callbacks to blind the defender:

```cpp
// 1. Locate PspCreateProcessNotifyRoutine array
//    (undocumented, found by pattern scan in ntoskrnl)
// 2. Walk the array: each entry is an EX_CALLBACK_ROUTINE_BLOCK
//    containing the Function pointer
// 3. Find entries pointing into the EDR driver's address range
// 4. Zero them out or replace with a no-op stub

// For ObRegisterCallbacks:
// Walk the callback list at ObjectType->CallbackList
// Find entries registered by the EDR driver (by altitude or module range)
// Unlink from the list
```

Tools: `CheekyBlinder`, `EDRSandBlast`, `CallbackHell` -- all automate callback removal.

## Detection of Callback Removal

- Periodic integrity check: driver re-enumerates its own callbacks, alerts if missing
- `KeRegisterBugCheckReasonCallback` -- fires on BSOD, can log callback state
- Cross-driver verification: two EDR components verify each other's callbacks
- Hypervisor-based: EPT-protect the callback arrays as read-only, trap modifications

## Related Skills

- `iat-inline-hooking` -- user-mode counterpart
- `ntdll-unhooking-edr-bypass` -- user-mode EDR bypass
- `process-hollowing-detection` -- uses kernel callbacks for detection
- `hidden-process-detection` -- DKOM vs callback-based detection
