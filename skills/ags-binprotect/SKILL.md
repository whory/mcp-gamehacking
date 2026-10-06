---
name: ags-binprotect
description: "This project is an x64 PE bin-to-bin obfuscator in C++ that transforms compiled binaries without adding new sections or requiring source code access. It includes a custom assembler and disassembler bu"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-binprotect
---

# binprotect

**Author:** noahware
**Source:** mcp-gamehacking/skills/ags-binprotect

## Description

This project is an x64 PE bin-to-bin obfuscator in C++ that transforms compiled binaries without adding new sections or requiring source code access. It includes a custom assembler and disassembler built on the binwrite library, PE file parsing with support for exception directories, RTTI structures, frame-pointer scanning, relocations, and jump-table recovery. The obfuscation pass operates at the basic-block level on disassembled functions. It is aimed at software protection researchers studying binary-rewriting obfuscation techniques and PE structural constraints.
