---
name: data-obfuscation-xorstr
description: Compile-time XOR string encryption with Justas Masiulis' xorstr.hpp -- SIMD-aligned storage, FNV-1a per-build keys, SSE/AVX/NEON decrypt, how to strip plaintext constants from a binary.
---

# Compile-Time XOR String Encryption (`xorstr.hpp`)

## Why

Plaintext string literals embedded in a binary are the lowest-hanging fruit for static analysis:
`strings` + `grep` reveals every URL, API name, error message, debug tag. XOR string encryption pushes
decryption to runtime so the plaintext never lives in `.rdata`.

Justas Masiulis' header-only `xorstr.hpp`
(<https://github.com/JustasMasiulis/xor_string>) is the canonical modern take. Compile-time template
expansion builds the encrypted buffer; runtime decrypt uses SIMD intrinsics (AVX2 / SSE2 / NEON).

## Usage

```cpp
#include "xorstr.hpp"

MessageBoxA(nullptr, xorstr_("Hello, world!"), xorstr_("Title"), MB_OK);
puts(xorstr_("Debug tag"));

// deferred decryption
auto s = xorstr("resolve_me_later");
// ... later:
char* decrypted = s.crypt_get();
```

`xorstr_(str)` is the one-shot form -- decrypts and returns a pointer.
`xorstr(str)` returns an `xor_string` object; call `.crypt_get()` when you need the plaintext.
Decryption toggles -- calling `crypt()` twice re-encrypts, so the plaintext window can be minimised.

## How It Works

### 1. Compile-time key derivation

```cpp
template<std::uint32_t Seed>
constexpr std::uint32_t key4() noexcept {
    std::uint32_t value = Seed;
    for (char c : __TIME__)                        // changes every build
        value = (value ^ c) * 16777619ull;         // FNV-1a prime
    return value;
}

template<std::size_t S>
constexpr std::uint64_t key8() {
    constexpr auto a = key4<2166136261 + S>();
    constexpr auto b = key4<a>();
    return (uint64_t{a} << 32) | b;
}
```

- `__TIME__` embeds the compile-time clock in each key -- builds minutes apart have different ciphertext.
- `S` is the per-chunk index -- every 8-byte chunk gets its own key, so an attacker who recovers one
  key does not recover the whole string.
- FNV-1a's `* 16777619` is deliberately slow for the compiler to constant-fold at low optimisation,
  pushing you to `/O2` for release builds.

### 2. Compile-time ciphertext

Each 8-byte chunk of the plaintext is XOR'd with `key8<idx>()` **inside the type system**:

```cpp
template<std::size_t N, class CharT>
constexpr std::uint64_t load_xored_str8(std::uint64_t key, std::size_t idx, const CharT* str) noexcept {
    std::uint64_t value = key;
    for (std::size_t i = 0; i < 8 / sizeof(CharT) && i + idx * (8/sizeof(CharT)) < N; ++i)
        value ^= std::uint64_t{static_cast<unsigned>(str[i + idx * (8/sizeof(CharT))])} << (i * 8 * sizeof(CharT));
    return value;
}
```

The result lives inside an `std::integer_sequence<std::uint64_t, ...>` -- the compiler emits the
ciphertext as initializers of a `_storage` array aligned to 16 or 32 bytes (SSE / AVX requirement).

### 3. Runtime SIMD decrypt

Three paths depending on the target architecture:

```cpp
// AVX2 (preferred on modern x86-64)
_mm256_store_si256(dst_i, _mm256_xor_si256(_mm256_load_si256(dst_i), _mm256_load_si256(key_i)));

// SSE2 fallback / tail
_mm_store_si128(dst_i, _mm_xor_si128(_mm_load_si128(dst_i), _mm_load_si128(key_i)));

// ARM NEON
vst1q_u64(dst, veorq_u64(vld1q_u64(dst), vld1q_u64(key)));
```

Hand-expanded (not a loop) so the compiler cannot hoist the loop into a function call that could be
hooked. The author explicitly notes "a certain compiler with a certain linker is _very_ slow"
otherwise.

### 4. Key reload trick

```cpp
XORSTR_FORCEINLINE std::uint64_t load_from_reg(std::uint64_t value) noexcept {
    asm("" : "=r"(value) : "0"(value) :);
    return value;
}
```

The empty inline asm with `"=r"` + `"0"` tells the compiler "pretend you don't know what register
this value is in" -- forcing the constant into a register instead of embedding it as an immediate
in `.rdata`. Without this trick an optimising compiler could lift the keys back out as const data,
defeating the whole point.

## Attack / Analysis

- Static: `.rdata` shows only aligned 16/32-byte garbage blocks. No `strings` hit.
- Dynamic: breakpoint on `crypt_get` return (or on the SIMD XOR instruction) and dump `_storage`.
- Beat it with Frida / x64dbg trace hooks: dump every call site where decrypted plaintext is handed
  off, correlate addresses to Function-at-which-decrypted.
- Compiler-wise: unoptimised `/Od` builds often spill keys to stack temporaries; keys become visible
  as 64-bit immediates in debug output. Always ship with `/O2`.

## Pattern Recognition in Compiled Output

Fingerprints that give away `xorstr.hpp` in a binary:

- Aligned 16/32-byte local stack buffers initialised from a vector of PC-relative immediates.
- A short burst of `vmovdqa` / `vpxor` / `vmovdqa` using the same memory operand twice.
- No corresponding plaintext in any `.rdata` section.

## Alternatives / Siblings

- `skCrypt` / `skStr` -- older, lambda-based, CRC32 of `__TIME__` -- found in many leaked cheats.
- `ADVobfuscator` (Andrivet) -- MACRO + lambda compile-time string encryption, pre-SIMD.
- `obfuscate.h` (Adam Yaxley) -- single-header, easy drop-in, no SIMD.
- `skcrypt2` -- updated skCrypt variant used in many Valorant / Rust cheats and in the VoidGuard
  protect chain (`app/src/protect/skcrypt2.h`).

Pair with `lazy_importer` (`LI_FN`) to also strip imported API names from the IAT -- see the sibling
skill `lazy-importer-peb-walk`.
