---
name: ags-cerberus
description: "This project is a Win32 VM-based code protection engine built around a custom x86 virtual machine called ChaosVm. It translates native x86 instructions into proprietary bytecode and executes them thro"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cerberus
---

# cerberus

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-cerberus

## Description

This project is a Win32 VM-based code protection engine built around a custom x86 virtual machine called ChaosVm. It translates native x86 instructions into proprietary bytecode and executes them through a software CPU emulator, providing code virtualization for PE binaries. The C codebase includes a full x86 disassembler and assembler, a binary analyzer for procedure and instruction flow recovery, PE file parsing and patching, CRC32 integrity checking, and a Qt-based GUI frontend for applying protection. It is aimed at software protection researchers studying VM-based obfuscation engines and code virtualization techniques.
