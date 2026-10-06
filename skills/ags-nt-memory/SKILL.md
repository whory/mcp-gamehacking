---
name: ags-nt-memory
description: "This project is a Windows kernel memory manipulation library in C that provides functions for reading, writing, and allocating memory across process boundaries from kernel mode. It implements process "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nt-memory
---

# NTMemory

**Author:** zer0condition
**Source:** mcp-gamehacking/skills/ags-nt-memory

## Description

This project is a Windows kernel memory manipulation library in C that provides functions for reading, writing, and allocating memory across process boundaries from kernel mode. It implements process memory access through MDL (Memory Descriptor List) mapping, physical memory translation, and CR3-based page table walking, bypassing standard API-level protections. It is aimed at kernel security researchers studying alternative memory access techniques used in kernel-mode cheats and anti-cheat evasion.
