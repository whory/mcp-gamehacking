---
name: vgk-ioctl-driver-proxy
description: VGK detection of unsigned usermode processes sending IOCTLs to legitimate/ViGEm drivers -- ObRegisterCallbacks stack walk, unsigned caller = flag. Bypass approaches: legitimate stub driver, process hollowing into signed host, kernel proxy.
---

# IOCTL Driver Proxy (ViGEm/Legitimate Driver Detection)

## The Problem

Anti-cheats (EAC, VGK) register `ObRegisterCallbacks` on device object opens (IRP_MJ_CREATE). When a usermode process calls `DeviceIoControl` on a legitimate driver (e.g. ViGEm virtual gamepad, DS4Windows, OpenRGB), VGK:

1. Intercepts the device handle create.
2. Walks the caller's stack via `PsGetCurrentThread -> ETHREAD.StackBase/Limit`.
3. Checks if the return address is inside a signed, known module.
4. If the caller is unsigned (our DLL), or if the call stack passes through an unknown module: **flag**.

## Detection Flow

```
Usermode: vg_client.dll calls DeviceIoControl(vigemBus, IOCTL_VIGEM_CONNECT, ...)
  -> NtDeviceIoControlFile -> NTDLL
  -> Kernel: ObpOpenObjectByName for \\Device\\ViGEmBus
  -> VGK ObRegisterCallbacks pre-open callback fires
  -> VGK: inspect caller's TEB.ClientId, walk ETHREAD.StackBase
  -> Return address in vg_client.dll (not in System32) -> FLAG
```

## Bypass 1: Call from a Signed Stub Process

Launch a separate helper process signed with a test/production certificate.
Have it open the device and proxy IOCTL calls via IPC (shared memory, pipe, socket) to vg_client.dll.

```
vg_client.dll -> named pipe/shm -> stub.exe (signed) -> DeviceIoControl -> driver
```

VGK sees stub.exe's signed module calling the IOCTL -> passes.
Downside: an extra process is visible in Task Manager. Mitigate with `NtQuerySystemInformation` hook (Phase 1 of VoidGuard).

## Bypass 2: Process Hollowing into Signed Host

Inject our code into a signed process that would legitimately call the driver (e.g. Steam.exe, Discord.exe, hardware utility).
From inside a signed process, the IOCTL call's stack trace is clean.

Detection risk: VGK may scan injected processes for shellcode or unsigned memory regions.
Mitigation: allocate with a module-spoofed VAD entry (fake section object).

## Bypass 3: Kernel Proxy via Our Driver

Our kernel driver (vg_client_drv.sys) calls the target driver's IRP directly, bypassing usermode altogether:

```c
// Build IRP manually for ViGEmBus or any target device
PDEVICE_OBJECT vigem_dev = GetDeviceFromName(L"\\Device\\ViGEmBus");
PIRP irp = IoBuildDeviceIoControlRequest(
    IOCTL_VIGEM_ALLOC_TARGET, vigem_dev, inputBuf, inputSize, outputBuf, outputSize,
    FALSE, &event, &iostatus);
IoCallDriver(vigem_dev, irp);
KeWaitForSingleObject(&event, Executive, KernelMode, FALSE, NULL);
```

Kernel-to-kernel IRP calls bypass ObRegisterCallbacks (which only intercepts usermode handle creates).
The stack trace shows ntoskrnl + our driver (both legitimate in terms of module-list presence if loaded via DSE bypass).

## ViGEm Specifically

ViGEm (virtual Xbox/DS4 controller) is detected not just via IOCTL caller, but also:
- ViGEmBus driver name visible in `PsLoadedModuleList`.
- ViGEm device objects visible via `IoGetDeviceObjectPointer`.
- ViGEm registry service key at `HKLM\SYSTEM\CurrentControlSet\Services\ViGEmBus`.

To hide ViGEm: unload ViGEmBus driver, use `busenum.sys` or a custom HID minidriver instead.

## Summary Table

| Method | Stealth | Complexity | Risk |
|---|---|---|---|
| Signed stub process | Medium | Low | Extra process visible |
| Hollowing into signed process | High | Medium | VAD scan |
| Kernel proxy IRP | High | High | Driver load detection |
| Hide ViGEm entirely | Highest | High | Custom HID driver needed |