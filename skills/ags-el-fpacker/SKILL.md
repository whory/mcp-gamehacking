---
name: ags-el-fpacker
description: "ELF32 binary packer that XOR-encrypts the .text section of an executable and prepends a decryption stub that restores the original code at runtime before jumping to the original entry point. Manipulat"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-el-fpacker
---

# ELFpacker

**Author:** mix64
**Source:** mcp-gamehacking/skills/ags-el-fpacker

## Description

ELF32 binary packer that XOR-encrypts the .text section of an executable and prepends a decryption stub that restores the original code at runtime before jumping to the original entry point. Manipulates ELF headers, program headers, and section headers to inject the stub segment while preserving the binary's loadable structure.
