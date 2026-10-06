---
name: ags-gdbghidra
description: "This project is a bridge that synchronizes live GDB debugging context with the GHIDRA interface."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-gdbghidra
---

# gdbghidra

**Author:** Comsecuris
**Source:** mcp-gamehacking/skills/ags-gdbghidra

## Description

This project is a bridge that synchronizes live GDB debugging context with the GHIDRA interface.
It combines a GDB-side Python client script with a Java extension for GHIDRA to exchange execution state in real time.
Key capabilities include cursor and stack synchronization, register propagation for better decompilation context, breakpoint control, and relocation handling.
It is mainly used by reverse engineers who want interactive debugging and static analysis to work together smoothly.
