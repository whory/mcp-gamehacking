---
name: vgk-vgc-emulation
description: VGC service pipe emulation -- vgk.sys IOCTL attestation handshake, named pipe server, STATUS_ACCESS_DENIED analysis. PAK custom content mounting -- bypass_pak_signing patch, FPakPlatformFile hook, mount priority 10000+.
---

# VGC Service Emulation + PAK Content Mounting

## VGC Named Pipe Protocol

vgk.sys communicates with vgc.exe (usermode service) via named pipe `\\.\pipe\vgc`.
vgk.sys calls `ZwOpenFile` on this path; if the pipe is not present, vgk.sys enters degraded mode (may still load Valorant but attestation will fail at first heartbeat).

### Pipe Server (Emulator Skeleton)

```cpp
HANDLE pipe = CreateNamedPipeW(
    L"\\\\.\\pipe\\vgc",
    PIPE_ACCESS_DUPLEX | FILE_FLAG_OVERLAPPED,
    PIPE_TYPE_BYTE | PIPE_READMODE_BYTE | PIPE_WAIT,
    1, 4096, 4096, 0, NULL);

while (true) {
    ConnectNamedPipe(pipe, &overlappedStruct);
    // Read request from vgk.sys
    DWORD read;
    ReadFile(pipe, buf, sizeof(buf), &read, NULL);
    // Dispatch based on IOCTL code in header
    HandleVgkRequest(buf, read, pipe);
    DisconnectNamedPipe(pipe);
}
```

### IOCTL Codes (approximate; reverse vgk.sys IRP_MJ_DEVICE_CONTROL)

- `0x220004` / `0x220008`: Heartbeat ping/pong.
- `0x22000C`: Attestation data request (vgk sends HWID digest, expects ACK).
- `0x220010`: Session terminate.

Reading vgk.sys's IOCTL dispatch table:
1. Open vgk.sys in IDA/Ghidra.
2. Find `DriverEntry` -> locate `DriverObject->MajorFunction[IRP_MJ_DEVICE_CONTROL]` assignment.
3. Trace into the dispatch function, switch on IoStackLocation->Parameters.DeviceIoControl.IoControlCode.

### STATUS_ACCESS_DENIED on Direct Usermode IOCTL

Calling `DeviceIoControl(L"\\\\.\\vgk", ...)` from a normal process returns `STATUS_ACCESS_DENIED`.
vgk.sys checks the caller's process against a whitelist (vgc.exe token, integrity level, signing cert).
Bypass: call from a kernel driver (our vg_client.dll via HV IOCTL) or via the pipe (which vgk.sys itself sends, not the client).

## PAK Custom Content Mounting

Valorant uses Unreal Engine 4/5 PAK file system. Custom content (skins, sounds, agents) can be loaded via PAK mounts.

### Step 1: Disable PAK Signature Verification

In VALORANT-Win64-Shipping.exe or the game module, locate `bypass_pak_signing` flag (0x20 bytes).

Pattern: scan for `FPakPlatformFile::Initialize` call, locate the signing check branch.
The flag is often a global bool or a config value checked before `OpenPakFile`.

Zero it out:
```cpp
uintptr_t flag_addr = base + 0x???;  // resolve per patch via sigscan
W<uint8_t>(flag_addr, 0);
// Or zero the entire 0x20-byte struct if it's a signing key struct
memset((void*)flag_addr, 0, 0x20);
```

### Step 2: Hook FPakPlatformFile::Mount

Replace the vtable slot for `Mount` or intercept the call directly:
```cpp
typedef bool(__cdecl* MountFn)(void* self, const wchar_t* pakFilename, uint32_t readOrder, const wchar_t* path);
MountFn original = (MountFn)vtable[MOUNT_SLOT];

bool __cdecl MountHook(void* self, const wchar_t* pakFilename, uint32_t readOrder, const wchar_t* path) {
    return original(self, pakFilename, readOrder, path);
}
```

### Step 3: Mount Custom PAK

```cpp
FPakPlatformFile* pak = GetPakPlatformFile();
pak->Mount(L"../../../VoidGuard/custom_skin.pak",
           10000,    // priority -- must be > base game paks (typically 0-100)
           NULL);
```

PAK files must be in `.ucas` + `.utoc` + `.pak` format (UE5 I/O Store format).
Build with UnrealPak or a compatible packaging tool.

### Detection

VGK may hash the loaded PAK list or detect foreign pak mounts via `FPakFile::GetInfo`.
Mitigation: load paks that do not replace existing checksummed assets (add-only, not replace).
Alternatively: mount from a virtual path that VGK doesn't scan.