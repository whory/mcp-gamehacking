---
name: ags-eac-runtime-extractor
description: "A DLL that extracts EasyAntiCheat's kernel driver at runtime before it touches disk."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eac-runtime-extractor
---

# EAC Runtime Extractor

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-eac-runtime-extractor

## Description

A DLL that extracts EasyAntiCheat's kernel driver at runtime before it touches disk.
Uses MinHook to intercept file I/O and driver loading functions, capturing the EAC driver binary as it is loaded into memory for offline analysis.
