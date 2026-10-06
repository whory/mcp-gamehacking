---
name: ags-binexport
description: "This project is BinExport, a binary analysis data exporter plugin for IDA Pro, Ghidra, and Binary Ninja. It serializes disassembly data including functions, basic blocks, instructions, cross-reference"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-binexport
---

# binexport

**Author:** google
**Source:** mcp-gamehacking/skills/ags-binexport

## Description

This project is BinExport, a binary analysis data exporter plugin for IDA Pro, Ghidra, and Binary Ninja. It serializes disassembly data including functions, basic blocks, instructions, cross-references, and call graphs into Protocol Buffer format for use with BinDiff and other external analysis tools. The C++ plugin provides a standardized intermediate representation for binary comparison and automated analysis workflows. It is aimed at reverse engineers and vulnerability researchers performing cross-tool binary analysis and diffing.
