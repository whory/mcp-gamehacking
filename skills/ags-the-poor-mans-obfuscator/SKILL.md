---
name: ags-the-poor-mans-obfuscator
description: "This project is a lightweight LLVM-based code obfuscator that applies simple but effective transformation passes to compiled binaries through the LLVM IR pipeline. It implements instruction substituti"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-the-poor-mans-obfuscator
---

# the poor mans obfuscator

**Author:** romainthomas
**Source:** mcp-gamehacking/skills/ags-the-poor-mans-obfuscator

## Description

This project is a lightweight LLVM-based code obfuscator that applies simple but effective transformation passes to compiled binaries through the LLVM IR pipeline. It implements instruction substitution, control flow flattening, and string encryption as LLVM optimization passes that can be integrated into standard build workflows. The C++ passes operate on LLVM IR, making them language and architecture independent. It is aimed at software protection researchers studying basic obfuscation transformations and their implementation as compiler passes.
