---
name: ags-dirty-vanity
description: "A proof-of-concept demonstrating a process injection technique that abuses the Windows process forking API (RtlCreateProcessReflection) to clone a target process and redirect the forked copy's start a"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dirty-vanity
---

# Dirty Vanity

**Author:** deepinstinct
**Source:** mcp-gamehacking/skills/ags-dirty-vanity

## Description

A proof-of-concept demonstrating a process injection technique that abuses the Windows process forking API (RtlCreateProcessReflection) to clone a target process and redirect the forked copy's start address to injected shellcode.
It avoids traditional WriteProcessMemory-based injection by writing shellcode to the original process and letting the fork inherit the memory, evading common EDR detection heuristics.
It is mainly useful for security researchers studying novel code injection techniques and anti-cheat engineers evaluating fork-based evasion methods.
