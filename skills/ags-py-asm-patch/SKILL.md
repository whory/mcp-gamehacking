---
name: ags-py-asm-patch
description: "This project is a Python-based inline hooking tool for ARM ELF binaries, specifically targeting Unity IL2CPP shared libraries (libil2cpp.so)."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-py-asm-patch
---

# PyAsmPatch

**Author:** axhlzy
**Source:** mcp-gamehacking/skills/ags-py-asm-patch

## Description

This project is a Python-based inline hooking tool for ARM ELF binaries, specifically targeting Unity IL2CPP shared libraries (libil2cpp.so).
It uses LIEF for ELF manipulation, Keystone for assembly, and Capstone for disassembly to merge code sections, patch GOT tables, and inject inline hooks with register inspection and LDR instruction fixup.
The tool supports hooking InitArray functions, adding breakpoints for IDA debugging, and calling wrapped Android native functions like android_log_print and mprotect.
It is mainly useful for mobile game security researchers performing static binary patching and inline hook injection on Unity IL2CPP games.
