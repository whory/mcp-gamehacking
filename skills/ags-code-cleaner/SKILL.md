---
name: ags-code-cleaner
description: "This project is an x64dbg plugin that cleans and simplifies disassembled machine code."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-code-cleaner
---

# CodeCleaner

**Author:** Steesha
**Source:** mcp-gamehacking/skills/ags-code-cleaner

## Description

This project is an x64dbg plugin that cleans and simplifies disassembled machine code.
It is written in C++ and uses Capstone for instruction analysis together with AsmJit for transformation-oriented logic.
The plugin focuses on removing junk patterns such as redundant NOPs and no-op register moves to make traces easier to read.
Its primary use case is reverse engineering packed or obfuscated binaries in game security research.
