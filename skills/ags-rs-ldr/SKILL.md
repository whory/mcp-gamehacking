---
name: ags-rs-ldr
description: "rs-ldr is a Rust library for hash-based dynamic WinAPI resolution on Windows x86_64 without an import table, visible API strings, or a kernel32 dependency for loading. It walks the PEB to find loaded "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rs-ldr
---

# rs ldr

**Author:** alfarom256
**Source:** mcp-gamehacking/skills/ags-rs-ldr

## Description

rs-ldr is a Rust library for hash-based dynamic WinAPI resolution on Windows x86_64 without an import table, visible API strings, or a kernel32 dependency for loading. It walks the PEB to find loaded modules by hashed name, parses export directories (including forwarded exports), and can load DLLs via ntdll LdrLoadDll through a DynApi interface. Compile-time XOR string obfuscation macros decode to stack buffers that zero themselves on drop, helping evade static string and signature scanning. Optional features include a pluggable syscall SSN resolver (with a DirectResolver reference for Hell's Gate-style techniques), a process-wide DynApi behind a spinlock, per-build salted djb2 hashes, and pure-Rust memory intrinsics for NODEFAULTLIB builds. It targets no_std Windows red-team, reverse-engineering, and game-security tooling that needs stealthy API resolution.
