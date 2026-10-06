---
name: lazy-importer-peb-walk
description: Justas Masiulis' lazy_importer -- PEB-walk module enumeration + FNV-1a export name hashing to resolve Win32 APIs without touching the IAT or strings. LI_FN macro, cached vs safe modes, forwarded-export handling.
---

# Lazy Importer -- PEB Walker + Hash-Based Import Resolution

## What It Solves

An executable's **Import Address Table** is a plaintext list of every API it depends on
(`VirtualAlloc`, `NtCreateThreadEx`, `WriteProcessMemory`, ...). Static analysts dump the IAT and
instantly understand half the behaviour. The IAT also means AV / EDR knows which functions to hook
before the binary even runs.

Lazy importer (<https://github.com/JustasMasiulis/lazy_importer>) resolves imports at runtime by:
1. Walking the Process Environment Block's loader list to find loaded modules.
2. For each candidate module, walking its export directory and hashing export names.
3. Comparing against a compile-time hash of the function name.

Net result: zero IAT entries for the lazy-imported APIs, zero plaintext API names in the binary.

## Usage

```cpp
#include "lazy_importer.hpp"

void* mem = LI_FN(VirtualAlloc)(nullptr, 0x1000, MEM_COMMIT, PAGE_EXECUTE_READWRITE);
LI_FN(MessageBoxA)(nullptr, "hi", "t", MB_OK);

// cached version (one lookup, subsequent calls hit a static void*)
LI_FN(VirtualAlloc).cached()(...);

// safe version (skips malformed modules; survives early injection)
LI_FN(VirtualAlloc).safe()(...);

// resolve a module handle only
HMODULE k = LI_MODULE("kernel32.dll").get<HMODULE>();
```

Three macros:

| Macro          | Returns                                           |
|----------------|---------------------------------------------------|
| `LI_FN(name)`  | `lazy_function` object; call via `operator()`     |
| `LI_FN_DEF(T)` | Same but takes an explicit type (useful for syscall-only APIs with no in-scope prototype) |
| `LI_MODULE(n)` | `lazy_module` object; `.get()` returns a base ptr |

## PEB Walk Primitives

Per-architecture TEB → PEB access:

```cpp
#if defined(_M_X64) || defined(__amd64__)
return (PEB_T*)__readgsqword(0x60);          // gs:[0x60]
#elif defined(_M_IX86) || defined(__i386__)
return (PEB_T*)__readfsdword(0x30);          // fs:[0x30]
#elif defined(_M_ARM64)
return *(PEB_T**)(__getReg(18) + 0x60);      // TEB in x18
#endif
```

From the PEB:

```
PEB -> Ldr -> InLoadOrderModuleList -> LDR_DATA_TABLE_ENTRY -> DllBase (image base)
                                                            -> BaseDllName (UNICODE_STRING)
```

The library walks that linked list with two enumerators:

- `unsafe_module_enumerator` -- assumes every entry is well-formed, fastest.
- `safe_module_enumerator` -- treats the list as circular, stops on sentinel; survives malformed
  entries. Needed when calling from early injection (DllMain of a manually-mapped DLL) where loader
  state is partially-initialised.

## Export Walk

For each module, map `IMAGE_EXPORT_DIRECTORY`:

```cpp
const IMAGE_EXPORT_DIRECTORY* ied = (IMAGE_EXPORT_DIRECTORY*)(base + opt->DataDirectory[0].VirtualAddress);
const uint32_t* names = (uint32_t*)(base + ied->AddressOfNames);
const uint32_t* funcs = (uint32_t*)(base + ied->AddressOfFunctions);
const uint16_t* ords  = (uint16_t*)(base + ied->AddressOfNameOrdinals);

for (size_t i = 0; i < ied->NumberOfNames; ++i) {
    const char* name = base + names[i];
    if (hash(name, offset) == target_hash)
        return base + funcs[ords[i]];
}
```

## FNV-1a Hash with Compile-Time Offset

```cpp
constexpr unsigned hash_single(unsigned value, char c) noexcept {
    return (value ^ static_cast<unsigned>(
                (!CaseSensitive && c >= 'A' && c <= 'Z') ? (c | (1 << 5)) : c)) * 16777619;
}

constexpr unsigned khash_impl(const char* str, unsigned value) noexcept {
    return (*str ? khash_impl(str + 1, hash_single(value, *str)) : value);
}

#define LAZY_IMPORTER_KHASH(str) ::li::detail::khash(str, \
    ::li::detail::khash_impl(__TIME__ __DATE__ __LINE__ __COUNTER__, 2166136261))
```

The seed is `__TIME__ __DATE__ __LINE__ __COUNTER__` -- so every call site at every build gets a
different hash, defeating cross-build hash-table rainbows and preventing an analyst from
pre-computing a dictionary of common Win32 API hashes.

The 64-bit `offset_hash_pair` packs:
- Upper 32 bits = seed offset -- re-fed into every `hash()` call so the comparison matches.
- Lower 32 bits = computed hash of the API name.

## Forwarded Export Handling

`kernel32!HeapAlloc` is a forward to `ntdll!RtlAllocateHeap`. The export entry points inside the
export directory itself and holds the string `"NTDLL.RtlAllocateHeap"`.

Enabled by `#define LAZY_IMPORTER_RESOLVE_FORWARDED_EXPORTS` or `LI_FN(...).forwarded()`:

```cpp
if (exports.is_forwarded(addr)) {
    hashes = hash_forwarded((const char*)addr, offset);  // split at '.', hash both halves
    e.reset();                                            // restart module walk
    break;
}
```

Without this, lazy-resolving `HeapAlloc` from `kernel32`'s export table yields a pointer *into*
`kernel32`'s export directory, which crashes when called.

## Modes

| Call form                      | Lookup each call? | Safe for malformed loader state? |
|--------------------------------|-------------------|----------------------------------|
| `LI_FN(X)()`                   | yes               | no                               |
| `LI_FN(X).cached()`            | no (one time)     | no                               |
| `LI_FN(X).safe()`              | yes               | yes                              |
| `LI_FN(X).safe_cached()`       | no                | yes                              |
| `LI_FN(X).forwarded()`         | yes, follows fwd  | no                               |
| `LI_FN(X).nt_cached()`         | no, hits ntdll only | no                             |
| `LI_FN(X).in(hModule)`         | yes, scoped to m  | no                               |
| `LI_FN(X).in_safe_cached(m)`   | no, scoped, safe  | yes                              |

`cached()` stashes the resolved pointer in a per-template `static void*`; subsequent calls are a
single `mov` + `jmp`.

## Analyst Fingerprint

Patterns that reveal lazy_importer in a disassembly:

- Direct `gs:[60h]` or `fs:[30h]` reads with no preceding module import. Classic PEB access.
- Loop walking a doubly-linked list of 56-byte structures (`LDR_DATA_TABLE_ENTRY`), reading
  `+0x30` (`DllBase`) and `+0x58` (`BaseDllName.Buffer`).
- FNV-1a multiplication (`imul eax, eax, 0x01000193` -- the 16777619 prime) in a tight loop over a
  `rep movsb`-style walk through an ASCII string.
- Call targets that look like `[rsp + N]` (cached static void*) rather than `[iat_entry]`.

## Defender Angles

- Baseline the import table; alert on PE binaries with abnormally few imports (<10 for a GUI app) --
  classic "lazy importer + xorstr" fingerprint.
- Trace API resolution: `NtQueryVirtualMemory` on `.text` of ntdll from a non-ntdll module is unusual.
- EDR can hook `_InitializeFromAbsolute` or set MinFilter breakpoints on `PEB->Ldr` walks via ETW
  Microsoft-Windows-Threat-Intelligence `KERNEL_CALLBACK_PROCESS` events (limited coverage).

## Related

- Pair with `data-obfuscation-xorstr` to strip the plaintext names from inside your own module too.
- Many red-team frameworks ship a lazy_importer-style helper -- Cobalt Strike's `BeaconApi`,
  Donut's syscall stubs, Nighthawk's "SysWhispers3"-generated import tables.
- VoidGuard embeds the exact header at `app/src/protect/lazy_importer.hpp` and uses `LI_FN` across
  the client / loader / protect chain.
