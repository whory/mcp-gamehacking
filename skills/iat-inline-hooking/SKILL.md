---
name: iat-inline-hooking
description: Import Address Table hooking vs inline hooking -- userland rootkit techniques. Walk IMAGE_IMPORT_DESCRIPTOR, patch FirstThunk entry, redirect API call. Analyst recognition and defender angles.
---

# IAT Hooking and Inline Hooking

Two canonical **userland rootkit** techniques for redirecting Windows API calls. Both end up with
the application calling the attacker's function instead of (or in addition to) the real one; they
differ in where in the call path the detour lives.

## IAT Hooking

Every PE has an **Import Address Table** (IAT) listing every API it imports from every DLL. At load
time the Windows loader walks the import descriptors and, for each imported function, writes the
resolved function pointer into `FirstThunk[i]`. Call sites in `.text` compile to
`call qword ptr [IAT_slot]` -- the real address is dereferenced from the IAT every call.

Overwrite `FirstThunk[i]` with the address of your own function and every subsequent call to that
API lands in your code. The real function is never patched -- only its directory entry in the host
PE's import table.

### Reference implementation (hook `MessageBoxA`)

```cpp
using PrototypeMessageBox = int (WINAPI*)(HWND, LPCSTR, LPCSTR, UINT);

PrototypeMessageBox originalMsgBox = MessageBoxA;

int hookedMessageBox(HWND hWnd, LPCSTR lpText, LPCSTR lpCaption, UINT uType) {
    MessageBoxW(NULL, L"Hooked!", L"Rogue", 0);
    return originalMsgBox(hWnd, lpText, lpCaption, uType);
}

int main() {
    MessageBoxA(NULL, "before", "before", 0);

    LPVOID imageBase = GetModuleHandleA(NULL);
    auto dos = (PIMAGE_DOS_HEADER)imageBase;
    auto nt  = (PIMAGE_NT_HEADERS)((DWORD_PTR)imageBase + dos->e_lfanew);

    auto importsDir = nt->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_IMPORT];
    auto importDesc = (PIMAGE_IMPORT_DESCRIPTOR)(importsDir.VirtualAddress + (DWORD_PTR)imageBase);

    while (importDesc->Name) {
        LPCSTR libraryName = (LPCSTR)importDesc->Name + (DWORD_PTR)imageBase;
        HMODULE library = LoadLibraryA(libraryName);
        if (!library) { importDesc++; continue; }

        auto oft = (PIMAGE_THUNK_DATA)((DWORD_PTR)imageBase + importDesc->OriginalFirstThunk);
        auto ft  = (PIMAGE_THUNK_DATA)((DWORD_PTR)imageBase + importDesc->FirstThunk);

        while (oft->u1.AddressOfData) {
            auto fn = (PIMAGE_IMPORT_BY_NAME)((DWORD_PTR)imageBase + oft->u1.AddressOfData);
            if (strcmp(fn->Name, "MessageBoxA") == 0) {
                DWORD oldProtect;
                VirtualProtect(&ft->u1.Function, 8, PAGE_READWRITE, &oldProtect);
                ft->u1.Function = (DWORD_PTR)hookedMessageBox;
                VirtualProtect(&ft->u1.Function, 8, oldProtect, &oldProtect);
            }
            ++oft; ++ft;
        }
        importDesc++;
    }

    MessageBoxA(NULL, "after", "after", 0);   // actually calls hookedMessageBox
}
```

### Pros / Cons

- **Pro**: no `.text` modification; trivial to install, trivial to remove.
- **Pro**: original function remains intact for the rest of the OS.
- **Con**: only intercepts callers that resolve via IAT. Direct `GetProcAddress` callers,
  `LI_FN` lazy-importer users, and anything that caches the function pointer on first use bypass
  the hook.
- **Con**: EDRs enumerate IAT at module load; any pointer not in a module's own `.text` range is a
  classic IOC.

## Inline Hooking (Detours-Style)

Patch the first few bytes of the target function with a `jmp` into your detour. The original
instructions are copied into a trampoline so the detour can call them afterwards.

### Layout (x64)

```
Before:                               After:
NtAllocateVirtualMemory:              NtAllocateVirtualMemory:
    4C 8B D1    mov r10, rcx              FF 25 00 00 00 00     jmp [rip + disp]
    B8 18 00..  mov eax, 0x18             <8-byte absolute target>
    0F 05       syscall                   <orig code resumes here>
                                      
                                      Detour:
                                          /* attacker code */
                                          call Trampoline       /* re-run the saved bytes */
                                          ret
                                      
                                      Trampoline:
                                          4C 8B D1              /* saved mov r10, rcx */
                                          B8 18 00 00 00        /* saved mov eax, syscall # */
                                          E9 ?? ?? ?? ??        /* jmp back to NtAllocate... + 14 */
```

Microsoft Research's **Detours** is the classic library (`DetourAttach` / `DetourDetach`).
Modern alternatives: **MinHook**, **PolyHook2**, **funchook**.

### Pros / Cons

- **Pro**: catches every caller, not just IAT-based.
- **Con**: modifies module `.text`. Hash drift, memory protection flip, `MEM_PROTECT_VIRTUAL_MEMORY`
  ETW events, CFG re-validation at `jmp` targets -- all noisy.
- **Con**: fragile when the first N bytes contain a short jump or jump-table entry; needs an
  instruction-length disassembler (Zydis, Capstone) to pick the correct trampoline split point.
- **Con**: trivially defeated by `ntdll-unhooking-edr-bypass` (sibling skill).

## Comparison

|                              | IAT                        | Inline                              |
|------------------------------|----------------------------|-------------------------------------|
| Modifies .text?              | No                         | Yes (first few bytes of target)     |
| Catches `GetProcAddress`?    | No                         | Yes                                 |
| Catches `LI_FN`?             | No                         | Yes                                 |
| Scoped to one module?        | Yes (per-module IAT)       | No (global)                         |
| Removable by ntdll re-map?   | N/A                        | Yes                                 |
| Detection ease               | Easy (IAT walk)            | Hard (requires `.text` CRC)         |

## Common Legitimate Users

- **Microsoft Detours** -- the official MS research library; used by Office, Visual Studio tools.
- **ReShade / SpecialK** -- game overlay injection via inline hooks on `d3d*`, `dxgi.dll`.
- **EasyHook / MinHook** -- generic hooking frameworks shipped in many enterprise agents.
- **Spy++** -- window-message instrumentation via IAT hook on `SendMessage` family.

Any production hook library leaves fingerprints: an `E9 ?? ?? ?? ??` or `FF 25 00 00 00 00` + 8-byte
immediate at the first 5/14 bytes of a well-known API, and a trampoline sitting in a nearby RWX
allocation. EDRs ship with signatures for every popular hook library.

## Detection

- Walk every imported DLL's export directory; for each export, compare `first_bytes_in_memory` with
  `first_bytes_on_disk`. Mismatch = inline hook.
- Walk every loaded module's IAT; for each entry, confirm the target address falls inside the
  declared DLL's module range. Pointer outside = IAT hook.
- ETW `KERNEL_CALLBACK` + MM provider captures `MEM_PROTECT_VIRTUAL_MEMORY` on ntdll `.text`.
- Compare module-on-disk SHA256 vs. in-memory `.text` hash at scan time (expensive but defeats
  stealth variants).

## Related Skills

- `ntdll-unhooking-edr-bypass` -- removing EDR's own inline hooks the same way.
- `windows-process-injection-memory` -- how the hook agent (DLL) gets into the target in the first
  place.
