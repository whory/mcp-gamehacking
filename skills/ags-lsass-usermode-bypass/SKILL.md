---
name: ags-lsass-usermode-bypass
description: "This project is a user-mode bypass demonstration that reuses LSASS process handles for memory access workflows."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-lsass-usermode-bypass
---

# LSASS Usermode Bypass

**Author:** ContionMig
**Source:** mcp-gamehacking/skills/ags-lsass-usermode-bypass

## Description

This project is a user-mode bypass demonstration that reuses LSASS process handles for memory access workflows.
It is implemented in C++ and is presented as an alternative to kernel-driver loading for certain anti-cheat evasion scenarios.
The repository emphasizes practical constraints, including stability risks when interacting with sensitive system processes.
Its main use case is studying user-mode tradeoffs in game anti-cheat bypass research.
