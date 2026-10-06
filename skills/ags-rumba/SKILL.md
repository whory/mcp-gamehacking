---
name: ags-rumba
description: "This project is Rumba, a Python framework for automated analysis of VMProtect-protected binaries. It uses symbolic execution and trace analysis to reconstruct the original control flow and instruction"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rumba
---

# rumba

**Author:** thalium
**Source:** mcp-gamehacking/skills/ags-rumba

## Description

This project is Rumba, a Python framework for automated analysis of VMProtect-protected binaries. It uses symbolic execution and trace analysis to reconstruct the original control flow and instruction semantics from VMProtect's virtualized code handlers. The tool processes execution traces to identify virtual opcode handlers, extract their semantics, and recover the original program logic. It is aimed at reverse engineers and malware analysts deobfuscating VMProtect-protected binaries.
