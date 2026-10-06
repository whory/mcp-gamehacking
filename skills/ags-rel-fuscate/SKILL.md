---
name: ags-rel-fuscate
description: "This project obfuscates ELF binaries by modifying JMPREL relocation table entries to cause functions to resolve into incorrect GOT entries, misleading disassemblers and decompilers."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rel-fuscate
---

# rel fuscate

**Author:** caprinux
**Source:** mcp-gamehacking/skills/ags-rel-fuscate

## Description

This project obfuscates ELF binaries by modifying JMPREL relocation table entries to cause functions to resolve into incorrect GOT entries, misleading disassemblers and decompilers.
It manipulates r_offset values in jmprel entries so that imported function names display incorrectly in static analysis tools, while the program continues to function correctly at runtime.
The Python-based toolchain includes scripts for extracting imports, generating obfuscation headers, and patching the ELF binary with partial RELRO lazy binding.
It is mainly useful for binary protection researchers studying ELF relocation-based obfuscation and anti-disassembly techniques.
