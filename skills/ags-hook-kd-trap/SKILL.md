---
name: ags-hook-kd-trap
description: "A kernel-mode hook for KdTrap, the Windows global exception handler invoked first when any exception occurs."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hook-kd-trap
---

# Hook KdTrap

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-hook-kd-trap

## Description

A kernel-mode hook for KdTrap, the Windows global exception handler invoked first when any exception occurs.
Modifies HalpStallCounter and related variables to hijack control flow, enabling a custom exception handler that safely intercepts null pointer dereferences and reserved CR3 bit faults.
