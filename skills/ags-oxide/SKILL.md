---
name: ags-oxide
description: "Rust-based PE binary packer that uses the exe-rs crate to parse and rewrite Portable Executable files, embedding a compressed payload with a trampoline-based unpacking stub. The stub uses TLS callback"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-oxide
---

# oxide

**Author:** frank2
**Source:** mcp-gamehacking/skills/ags-oxide

## Description

Rust-based PE binary packer that uses the exe-rs crate to parse and rewrite Portable Executable files, embedding a compressed payload with a trampoline-based unpacking stub. The stub uses TLS callback entry points (provided as x86 and x64 NASM sources) to decompress and execute the original binary at runtime. Its architecture is intentionally extensible for adding obfuscation or anti-reversing passes beyond simple compression.
