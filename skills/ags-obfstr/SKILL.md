---
name: ags-obfstr
description: "This project is a Rust library for compile-time string obfuscation. It provides macros such as obfstr!, obfcstr!, obfbytes!, wide!, and random! to embed obfuscated constants and decode them locally at"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-obfstr
---

# obfstr

**Author:** CasualX
**Source:** mcp-gamehacking/skills/ags-obfstr

## Description

This project is a Rust library for compile-time string obfuscation. It provides macros such as obfstr!, obfcstr!, obfbytes!, wide!, and random! to embed obfuscated constants and decode them locally at runtime. The implementation focuses on lightweight source-level integration and reproducible build-time randomness rather than strong secret protection. It is useful for developers and reverse-engineering researchers who want to reduce obvious plaintext artifacts in binaries.
