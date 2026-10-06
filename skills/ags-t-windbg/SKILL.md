---
name: ags-t-windbg
description: "This project is a PEDA-like debugger UI extension for WinDbg built using the pykd Python scripting engine."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-t-windbg
---

# TWindbg

**Author:** bruce30262
**Source:** mcp-gamehacking/skills/ags-t-windbg

## Description

This project is a PEDA-like debugger UI extension for WinDbg built using the pykd Python scripting engine.
It displays registers, disassembled code near the program counter, and stack contents with smart dereference on each step or trace, along with PEDA-style commands for memory inspection and symbol lookup.
The Python extension provides a GDB-PEDA-inspired debugging experience within the WinDbg environment for more comfortable exploit development and binary analysis.
It is mainly useful for Windows exploit developers and reverse engineers who prefer a PEDA-style debugging workflow in WinDbg.
