---
name: windows-process-injection-memory
description: Why in-memory execution bypasses file-based AV -- VirtualAlloc / WriteProcessMemory / CreateRemoteThread, manual mapping, reflective loading, DEP / ASLR / CFG mitigations.
---

# Memory-Based Process Injection

## Why Memory Instead of Disk

File-based AV / EDR hooks on disk writes, signature scans PE on load, static analysis engines parse
on-disk binaries. Code never touching disk sidesteps those layers entirely.
The CPU still has to execute code from memory; that execution layer is where modern bypass techniques live.

## Primitive APIs

| API                           | Purpose                                     |
|-------------------------------|---------------------------------------------|
| `VirtualAlloc`                | Reserve + commit pages in current process   |
| `NtAllocateVirtualMemory`     | Syscall-level equivalent (bypasses hooks)   |
| `VirtualProtect`              | Flip permissions (RW → RX after copy)       |
| `WriteProcessMemory`          | Write bytes into another process            |
| `OpenProcess`                 | Get a handle with `PROCESS_VM_*` + `CREATE_THREAD` rights |
| `CreateRemoteThread`          | Spawn a thread at an arbitrary address in a target process |
| `NtCreateThreadEx`            | Lower-level thread creator; skips notifications set by some AVs |

## Classic Remote Injection Chain

```
hProc  = OpenProcess(PROCESS_ALL_ACCESS, FALSE, pid);
remote = VirtualAllocEx(hProc, NULL, size, MEM_COMMIT, PAGE_EXECUTE_READWRITE);
WriteProcessMemory(hProc, remote, shellcode, size, NULL);
CreateRemoteThread(hProc, NULL, 0, remote, arg, 0, &tid);
```

Variants:
- Allocate `RW`, write, then `VirtualProtectEx` to `RX` -- avoids `WX` which is heavily flagged.
- Allocate inside an existing executable module gap (section padding) -- hides from `MEM_PRIVATE` scans.
- Queue APC instead of CreateRemoteThread -- `QueueUserAPC` on an alertable thread.
- Thread hijacking -- `SuspendThread` + `SetThreadContext(RIP = payload)` + `ResumeThread`.

## Manual Mapping (MMap)

Load a PE into memory without the Windows loader:
1. Allocate memory of `SizeOfImage` with `PAGE_READWRITE`.
2. Copy headers + each section to its `VirtualAddress`.
3. Apply base relocations (`.reloc`).
4. Resolve imports -- walk IAT, `GetProcAddress` each `IMAGE_THUNK_DATA`.
5. Apply per-section protections via `VirtualProtect`.
6. Call `DllMain(hModule, DLL_PROCESS_ATTACH, NULL)` at `AddressOfEntryPoint`.

Benefit: no `LDR_DATA_TABLE_ENTRY` in `PEB->Ldr`, no `MEM_IMAGE` region in the target.
Scanners that enumerate `PEB->Ldr` miss the module.

## Reflective Loading

Payload DLL contains its own loader stub. Dropper only has to:
1. Allocate memory in target.
2. Write the DLL image.
3. Call the exported `ReflectiveLoader` function.
The DLL walks its own PE headers from memory, no `LoadLibrary` involvement.

Classic reference: Stephen Fewer's `ReflectiveDLLInjection`.

## Mitigations

| Mitigation      | What It Does                                                   |
|-----------------|----------------------------------------------------------------|
| DEP (NX)        | Non-executable pages trap on fetch                             |
| ASLR            | Randomizes PE base, PEB, heap, stack, kernel addresses         |
| CFG             | Validates indirect call targets against compiler-emitted bitmap |
| ACG             | Arbitrary Code Guard: forbids RWX / dynamic code in a process  |
| CIG             | Code Integrity Guard: only signed images may load              |
| XFG             | Hashes call sites + target prototype (eXtended CFG)            |
| Shadow Stack    | HW-enforced return-address verification (CET)                  |

## Detection Angles

- `NtAllocateVirtualMemory` with `PAGE_EXECUTE_*` → ETW `Microsoft-Windows-Threat-Intelligence`.
- `CreateRemoteThread` cross-process → `ThreatIntelProvRegHandle` event.
- `MEM_PRIVATE` + `PAGE_EXECUTE_READWRITE` outside module ranges = classic shellcode fingerprint.
- Discrepancy between `PEB->Ldr` modules and VAD-tree `MEM_IMAGE` regions = manual-mapped payload.
