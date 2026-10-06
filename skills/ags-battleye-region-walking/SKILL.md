---
name: ags-battleye-region-walking
description: "This project demonstrates BattlEye's memory region walking technique used to detect injected code in a process's virtual address space."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-battleye-region-walking
---

# battleye region walking

**Author:** tr1xxx
**Source:** mcp-gamehacking/skills/ags-battleye-region-walking

## Description

This project demonstrates BattlEye's memory region walking technique used to detect injected code in a process's virtual address space.
It implements VirtualQuery-based region enumeration with BattlEye's filtering logic that identifies suspicious executable memory regions based on protection flags, region sizes, memory types, and address patterns.
The C++ codebase classifies regions as valid or invalid based on MEM_PRIVATE/MEM_MAPPED type checks and specific size and address heuristics that BattlEye uses to flag shellcode and manual-mapped modules.
It is mainly useful for anti-cheat researchers and reverse engineers studying BattlEye's memory scanning detection methodology.
