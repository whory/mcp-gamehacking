---
name: ags-be-shellcode
description: "A tool for analyzing BattlEye's user-mode shellcode by dumping, disassembling, and documenting the detection modules that BE injects into protected game processes, including system thread scanning, VE"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-be-shellcode
---

# BE Shellcode

**Author:** weak1337
**Source:** mcp-gamehacking/skills/ags-be-shellcode

## Description

A tool for analyzing BattlEye's user-mode shellcode by dumping, disassembling, and documenting the detection modules that BE injects into protected game processes, including system thread scanning, VEH enumeration, module integrity checks, and signature-based detection routines.
The project implements its own system thread finder (systhreadfinder.cpp), thread scanning logic (thread_scan.cpp), VEH handler enumeration (veh.cpp), and module walking (modules.cpp) to replicate and study the detection techniques BattlEye's shellcode performs at runtime.
It is mainly useful for anti-cheat researchers and reverse engineers studying BattlEye's shellcode-based detection architecture and its specific integrity check implementations.
