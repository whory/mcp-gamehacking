---
name: ags-ida-gpt
description: "ida_gpt is an IDAPython helper that connects IDA Pro disassembly workflows to a ChatGPT-compatible backend."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-gpt
---

# ida gpt

**Author:** MayerDaniel
**Source:** mcp-gamehacking/skills/ags-ida-gpt

## Description

ida_gpt is an IDAPython helper that connects IDA Pro disassembly workflows to a ChatGPT-compatible backend.
It is written in Python and provides functions that request plain-language function descriptions and automated renaming suggestions for variables, locations, and function symbols.
The script is designed for interactive use inside IDA, where generated outputs are written back into the database as comments and renamed identifiers.
It is best suited for reverse engineering practitioners who want faster triage and annotation of unfamiliar binaries.
