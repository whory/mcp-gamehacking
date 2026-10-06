---
name: ags-cbs
description: "This project is an IDA Pro plugin that sets, enables, disables, or removes breakpoints based on instruction patterns."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cbs
---

# CBS

**Author:** Reodus
**Source:** mcp-gamehacking/skills/ags-cbs

## Description

This project is an IDA Pro plugin that sets, enables, disables, or removes breakpoints based on instruction patterns.
It uses Python with regular expressions to scan disassembly lines and apply breakpoint actions across functions.
The plugin includes a PyQt interface for managing opcode patterns interactively.
It is intended for reverse engineers who need fast, repeatable breakpoint automation during binary analysis.
