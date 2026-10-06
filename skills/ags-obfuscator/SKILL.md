---
name: ags-obfuscator
description: "This project is a C++ PE binary obfuscator that applies multiple transformation passes to compiled x86-64 executables. It implements control flow flattening, junk code insertion, instruction mutation,"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-obfuscator
---

# obfuscator

**Author:** es3n1n
**Source:** mcp-gamehacking/skills/ags-obfuscator

## Description

This project is a C++ PE binary obfuscator that applies multiple transformation passes to compiled x86-64 executables. It implements control flow flattening, junk code insertion, instruction mutation, import obfuscation, and anti-disassembly tricks directly on PE files without requiring source code access. The obfuscator operates at the binary level using disassembly and reassembly. It is aimed at software protection researchers studying post-compilation obfuscation techniques and binary-level code transformation.
