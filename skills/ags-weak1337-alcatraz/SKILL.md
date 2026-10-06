---
name: ags-weak1337-alcatraz
description: "A x64 PE binary obfuscator with an ImGui-based GUI that applies multiple transformation passes to compiled executables: instruction mutation (rewriting MOV, ADD, LEA with equivalent sequences), contro"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-weak1337-alcatraz
---

# Alcatraz

**Author:** weak1337
**Source:** mcp-gamehacking/skills/ags-weak1337-alcatraz

## Description

A x64 PE binary obfuscator with an ImGui-based GUI that applies multiple transformation passes to compiled executables: instruction mutation (rewriting MOV, ADD, LEA with equivalent sequences), control-flow flattening (converting branch structures into dispatcher-based state machines), anti-disassembly junk insertion, IAT obfuscation, and custom entry point redirection.
Built on Zydis for disassembly and AsmJit for code generation, it parses PE sections and PDB symbols via a custom PDB parser, applies transformations at the instruction level, and reassembles the modified binary while preserving relocations and imports.
It is mainly useful for game security researchers studying PE-level code obfuscation techniques and anti-cheat developers evaluating binary protection strength.
