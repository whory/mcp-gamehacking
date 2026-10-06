---
name: ags-delphi-re-sym
description: "This project is a Ghidra-oriented tool that recovers Delphi symbol information from compiled binaries."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-delphi-re-sym
---

# DelphiReSym

**Author:** WenzWenzWenz
**Source:** mcp-gamehacking/skills/ags-delphi-re-sym

## Description

This project is a Ghidra-oriented tool that recovers Delphi symbol information from compiled binaries.
It reconstructs qualified function signatures, parameter metadata, and virtual table context from embedded compiler metadata, then maps results into Ghidra data types.
The implementation is a Python script for pyghidra and targets a wide range of modern Delphi versions.
Its primary use case is malware and legacy software reverse engineering where recovering semantic names speeds up analysis.
