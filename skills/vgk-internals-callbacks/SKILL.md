---
name: vgk-internals-callbacks
description: VGK (vgk.sys) internals -- 9 kernel callbacks registered at DriverEntry, 2 VGC boot threads, bypass methods (ObProcess callback removal, VGC sechost thread termination, vgc.exe module unload).
---

# VGK Internals and Bypass Methods

## VGK DriverEntry Overview

vgk.sys registers the following at startup:

### Kernel Callbacks (9 total)

| Callback | API | Purpose |
|---|---|---|
| LoadImage | PsSetLoadImageNotifyRoutine | Monitor driver/image loads |
| ObProcess pre | ObRegisterCallbacks (OB_OPERATION_HANDLE_CREATE/DUPLICATE) | Block game process handle opens |
| ObProcess post | ObRegisterCallbacks | Monitor what got through |
| ObThread pre | ObRegisterCallbacks | Block game thread handle opens |
| ObThread post | ObRegisterCallbacks | Monitor |
| CreateProcess 1 | PsSetCreateProcessNotifyRoutineEx | Monitor process creation |
| CreateProcess 2 | PsSetCreateProcessNotifyRoutineEx | (backup registration) |
| Registry | CmRegisterCallback | Monitor registry writes to anti-cheat keys |
| Shutdown | IoRegisterShutdownNotification | Cleanup on system shutdown |

### Boot Threads (in vgc.exe usermode service, 2 threads)

- **Thread 1**: Heartbeat loop (250ms). Sends attestation data to Riot servers. If heartbeat fails: sets ban flag.
- **Thread 2**: Integrity verification loop (interval varies). Scans loaded modules, checks CI state, verifies VGK driver hash.

## Bypass Method 1: Remove ObProcess Callbacks

**Condition**: Pre-2021 Vanguard. Newer versions protect callback list.

Find `ObRegisterCallbacks` entries in `PspCreateProcessNotifyRoutine` array (for process; similar for thread):
```c
// Pattern for callback table in ntoskrnl:
// 48 8D 0D ?? ?? ?? ?? E8 ?? ?? ?? ?? 48 85 C0 74 ?? (PspCreateProcessNotifyRoutine)
PCALLBACK_ENTRY entries = (PCALLBACK_ENTRY)resolved_addr;
for (int i = 0; i < 64; i++) {
    if (entries[i].Enabled && entries[i].Function == vgk_callback_fn) {
        entries[i].Enabled = FALSE;
    }
}
```
Modern VGK: checksums its own callback registration and detects removal within 1 heartbeat.

## Bypass Method 2: Terminate VGC sechost.dll Thread

vgc.exe injects a thread into sechost.dll (service host). Terminating this specific thread disables the heartbeat for one TTL window (5 minutes):

```c
// Find sechost.dll module base in vgc.exe PEB
// Enumerate threads: OpenThread -> suspend -> check start address inside sechost range
// TerminateThread(hThread, 0);
```
Detected: VGC has a watchdog that restarts the thread if dead > 100ms. Also: OpenThread on vgc.exe requires bypassing ObProcess pre-callback.

## Bypass Method 3: Unload vgc.exe Main Module

More surgical than thread termination -- unload the main vgc.exe module from its own address space:
1. Attach to vgc.exe (NtOpenProcess with PROCESS_VM_WRITE).
2. Locate vgc.exe base in PEB (`PEB.Ldr -> InLoadOrderModuleList`).
3. Call `LdrUnloadDll` via APC injection or remote thread.
4. Without its main module, VGC cannot send heartbeats.

**Block**: ObProcess pre-callback strips `PROCESS_VM_WRITE` access rights when opening vgc.exe.
**Bypass**: ObProcess callback itself must be removed first (circular dependency).

## Bypass Method 4: vgk.sys Attestation Spoofing (via VGK IOCTL)

VGK exposes `\\.\vgk` device. Direct call returns `STATUS_ACCESS_DENIED` from usermode.
However, from kernelmode (our driver) we can spoof the attestation buffer before it reaches vgk.sys:
1. Hook vgk.sys's IRP dispatch for `IRP_MJ_DEVICE_CONTROL`.
2. Intercept `IOCTL_VGK_ATTESTATION`.
3. Replace response fields with clean values before completion.

## Bypass Method 5: VGK Seed / DriverEntry Hook

vgk.sys validates its own configuration at DriverEntry using a seed computation (Unicorn-emulated in skill vgk-reverse-engineering). If we can predict or spoof the seed:
1. Map vgk.sys ourselves before the OS maps it (via UEFI DXE phase).
2. Patch the DriverEntry seed check to always succeed.
3. VGK proceeds with a state we control.

## Bypass Method 6: CI Integrity (Phase 9.3 in VoidGuard)

NtQuerySystemInformation class 159 (`SystemCodeIntegrityInformation`) returns CI flags.
VGK reads this and cross-checks with direct kernel CI state.
Fix: Hook NTQSI (14-byte JMP trampoline, Phase 1 of VoidGuard) to return clean CI flags.
Also: EPT shadow page over CI.dll to hide the g_CiEnabled=0 patch.

## Key Observations

- VGK is a Boot Start driver (Start=0): runs before Windows login. Cannot be stopped without UEFI/pre-OS intervention.
- VGK anti-tamper: backs up its own callback registrations and re-registers if removed.
- Best bypass surface: **before VGK loads** (UEFI phase) or **transparent to VGK** (EPT-based memory isolation).