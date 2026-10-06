---
name: ags-ghidra-coff-parser
description: "This project is a Ghidra analysis script that performs comprehensive COFF parsing beyond default loader behavior. It is written in Python and maps headers, symbol data, string tables, and relocation e"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ghidra-coff-parser
---

# Ghidra COFFParser

**Author:** MEhrn00
**Source:** mcp-gamehacking/skills/ags-ghidra-coff-parser

## Description

This project is a Ghidra analysis script that performs comprehensive COFF parsing beyond default loader behavior. It is written in Python and maps headers, symbol data, string tables, and relocation entries with added type information. The script also applies relocations and cross-references to improve analysis context inside the disassembler. The primary use case is reverse engineering COFF object files with richer structural visibility in Ghidra.
