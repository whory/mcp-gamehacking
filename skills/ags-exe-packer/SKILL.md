---
name: ags-exe-packer
description: "This project is a Windows executable packer that rebuilds PE files with a custom unpacking stub."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-exe-packer
---

# exe packer

**Author:** andrew9382
**Source:** mcp-gamehacking/skills/ags-exe-packer

## Description

This project is a Windows executable packer that rebuilds PE files with a custom unpacking stub.
It compresses the original binary with Huffman coding, stores the data in a dedicated section, and emits a new loader-oriented image.
The stub resolves low-level NTDLL and KERNEL32 APIs, decrypts import-name data, maps sections, applies relocations, fixes imports, and jumps to the original entry point.
The codebase is written in C/C++ with Visual Studio projects and targets both x86 and x64 PE internals.
It is mainly useful for reverse-engineering research, packer analysis, and understanding anti-analysis loaders in game security contexts.
