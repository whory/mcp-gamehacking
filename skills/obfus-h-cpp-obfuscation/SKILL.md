---
name: obfus-h-cpp-obfuscation
description: DosX's obfus.h -- single-header C obfuscation framework. Control-flow mutation, hidden strings, lazy CRT resolution, BREAK_STACK primitives, anti-debug, optional VIRT math-VM and fake-signature padding.
---

# obfus.h (DosX) -- Single-Header C Obfuscation

Repo: <https://github.com/DosX-dev/obfus.h>

Header-only obfuscation framework for C projects compiled with TCC / GCC / MinGW
(no MSVC -- author recommends `obfusheader.h` by ac3ss0r for that compiler). Enabled by just
`#include "obfus.h"`; everything else activates via compile-time macros.

## Feature Switches

| Macro             | Effect                                                          |
|-------------------|-----------------------------------------------------------------|
| `CFLOW_V2`        | Stronger control-flow obfuscation (slower)                      |
| `ANTIDEBUG_V2`    | Dynamic anti-debug (DR0..DR7 scan + runtime API resolve)        |
| `FAKE_SIGNS`      | Appends empty sections matching Enigma / VMProtect / Themida / UPX / Petite / RLP / SecuROM / etc. headers to trick AV classifiers that key on packer signatures |
| `VIRT`            | Enables a math-VM for integer / float arithmetic                |
| `NO_CFLOW`        | Disable control-flow obfuscation (default = enabled)            |
| `NO_ANTIDEBUG`    | Disable anti-debug (default = enabled)                          |
| `NO_OBF`          | Disable obfuscation entirely                                    |
| `OBFH_BUILD_SEED` | Change RND salt so repeated builds produce different ciphertext |

## Primitives

### `HIDE_STRING(str)`

Compile-time XOR-encoded ASCII, decoded at first use into a stack string. Decoder prefixes a sentinel
`\0` so the returned pointer is `+1` after the leading zero.

```c
puts(HIDE_STRING("sensitive_url"));
```

### `BREAK_STACK_N` (N = 1..13)

Inline-asm junk sequences that confuse linear-sweep and recursive disassemblers. Variants include
spurious `cpuid`, zero/one/two-byte opcode fragments, impossible branches, parity-conditional
jumps, and byte-aligned `.fill` padding. Different variants have different clobber lists so they
can be nested without compiler-visible side effects.

Example output pattern (variant 1):

```asm
xor  eax, eax
jz   .L1
.byte 0xE8          ; fake call opcode
.fill rand, 1, rand ; junk bytes
.L1:
cpuid               ; serialization + register pollution
```

### `obfh_int_proxy` / `obfh_uintptr_proxy` / `obfh_double_proxy`

Volatile pass-through with `RET_BY_VAR` -- stores the value in a stack slot, XORs the slot address
with `SALT_SHIFT`, dereferences via the XOR'd pointer. The compiler can't fold these away, forcing
the value to make a round trip through memory. Every API call and arithmetic input is wrapped.

### `OBFH_FLOW_CONDITION`

Replaces every `if (x)` with a check that calls a 4-way routed hash routine
(`obfh_flow_route_0..3`) over the truthy/falsy value, folds floats and ints through
`obfh_int_proxy` / `obfh_double_proxy`, and compares against a precomputed `OBFH_FLOW_FINAL` token.
Each `if` / `else` / `switch` / `while` / `for` site gets its own `RND(1, 65535)` seed via
`__COUNTER__` + `__LINE__`, so no two conditions share a predicate shape.

```c
#define if(cond) if (OBFH_FLOW_CONDITION(cond, RND(1, 65535)))
```

### `Obfh_VirtualMachine` (when `VIRT=1`)

Threaded-code VM with opcode constants mutated per `__COUNTER__`. Supports:

| Opcode    | Operation                               |
|-----------|-----------------------------------------|
| `OP__ADD` / `OP__SUB` / `OP__MUL` / `OP__DIV` / `OP__MOD` | Arithmetic |
| `OP__EQU` / `OP__NEQ` / `OP__GTR` / `OP__LSS` / `OP__GEQ` / `OP__LEQ` | Comparisons |
| `OP__BRANCH` | Opaque conditional (hashes nonce + site → three-variant decision program) |
| `OP__NOP` | Returns first operand unchanged |

Operands are stored as byte-copied `OBFH_VM_VALUE` (XOR'd per-byte) to preserve subnormals, NaN
payloads, and signed zeros across the encode/decode round-trip. The dispatch uses `goto`-based
threaded control flow with fake jump targets interleaved.

Macros: `VM_ADD`, `VM_SUB`, `VM_MUL`, `VM_IF`, `VM_ELSE_IF`, `VM_ELSE`, `VM_OBF_INT`, `VM_OBF_DBL`.

### Lazy CRT Resolution

Wraps every CRT API (`printf`, `scanf`, `sprintf`, `fopen`, `fread`, `strcpy`, `memcpy`, `rand`,
etc.) in a `*_proxy` function that:

1. Builds the function name at runtime one char at a time from scrambled single-byte globals
   (`_a`, `_b`, ..., `_z`) living in a dedicated obfh section.
2. Resolves via the manual PE export walker `obfh_find_export` -- custom `GetProcAddress` with
   forwarded-export resolution (handles `MODULE.#ordinal`).
3. Caches the resolved pointer in an atomic 32-slot table (`obfh_crt_cached` /
   `obfh_crt_publish`) with XOR'd function names and addresses.

Result: zero plaintext CRT names in `.rdata`; no CRT imports in IAT (only `kernel32` for the
loader bootstrap).

### Lazy loader bootstrap

`LoadLibraryA_proxy` → `LoadLibraryA_5` → `..._0`: six-deep call chain, each layer with a different
`BREAK_STACK_N` variant. `..._0` reconstructs `"kernel32"` from `_k, _e, _r, _n, _e, _l, _3, _2`
and `"LoadLibraryA"` similarly, calls `GetModuleHandleA` + manual export walker to get
`LoadLibraryA`, caches via `InterlockedCompareExchange`. All subsequent `LoadLibrary` calls route
through the cached pointer.

### `ANTI_DEBUG` macro

Expands to `IsDebuggerPresent()` short-circuited through `obfh_int_proxy(_0 / !check)` -- division
by zero crashes the process on debugger presence, with fallback `loop()` and a stream of
`BAD_JMP` / `BAD_CALL` to further confuse the disassembler.

When `ANTIDEBUG_V2 == 1`: spawns a worker thread that `SuspendThread`'s the main thread, grabs
`CONTEXT.Dr0..Dr7`, and crashes if any debug register is non-zero (hardware breakpoints detected),
then zeroes them in-place. The thread also dynamically resolves `IsDebuggerPresent` from
`kernel32` via the proxy chain -- avoids a static import.

### `FAKE_SIGNS`

Appends empty sections with names matching known packers / protectors:

```
.vmp0, .vmp1, .vmp2        -- VMProtect
.enigma1, .enigma2         -- Enigma Protector
.winlice                   -- Themida/WinLicense
UPX0                       -- UPX
.petite, .rlp, .dsstext    -- Petite, RLProtector, SecuROM
.alien, .pwdprot, .vlizer  -- Alinyze, PwdProtect, Oreans
"__wibu00", "__wibu01"     -- WibuCodeMeter
```

Plus string-based decoys for Enigma (`"Enigma protector v..."` in `.data`), Denuvo
(`"denuvo_atd"` in `.arch`), Nuitka, Screen2Exe fingerprints. The point isn't to fool a determined
analyst -- it's to divert signature-based AV classifiers that key on `Section name == ".vmp0"`
or `MZ + "Enigma protector"` into misclassifying.

## Build Fingerprint

An `obfus.h`-built binary looks like:

- Dozens of `.text`-aligned sequences of `cpuid` + random bytes + conditional jumps.
- Export table with no CRT functions imported (only `kernel32` basics).
- `.rdata` strings consist of single lowercase letters repeated.
- Section layout contaminated with 20+ "packer signature" names, each with 0-byte content.
- Every arithmetic op in the compiled code goes through a volatile reload.
- `__TIME__` / `__COUNTER__` / `__LINE__` baked into every xor/hash constant.

Can be fingerprinted by:
- The repeated `imul` with `16777619` (FNV-1a prime baked into `HIDE_STRING`).
- The characteristic `jz 1f; .byte 0xE8; .fill` sequence (BREAK_STACK_1).
- The `__COUNTER__`-based opcode constants in the VM dispatcher switch.

Pair with: `anti-disassembly-techniques` (which categorises the primitives obfus.h synthesises),
`data-obfuscation-xorstr`, `lazy-importer-peb-walk` (same idea, different syntax).
