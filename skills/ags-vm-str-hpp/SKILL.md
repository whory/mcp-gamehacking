---
name: ags-vm-str-hpp
description: "This project is a header-only C++20 string obfuscation library that transforms literals into runtime-reconstructed data. It generates an obfuscation bytecode schema at compile time and uses a small st"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vm-str-hpp
---

# vm str.hpp

**Author:** Mowokuma
**Source:** mcp-gamehacking/skills/ags-vm-str-hpp

## Description

This project is a header-only C++20 string obfuscation library that transforms literals into runtime-reconstructed data. It generates an obfuscation bytecode schema at compile time and uses a small stack-based virtual machine to rebuild strings during execution. The API exposes macros for narrow and wide string forms while aiming to keep plaintext strings out of static program data. It is mainly used for software hardening and reverse-engineering resistance in security-sensitive codebases.
