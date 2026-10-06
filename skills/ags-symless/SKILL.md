---
name: ags-symless
description: "This project is Symless, an IDA Pro plugin for automated structure and type recovery from stripped binaries. It uses data flow analysis and memory access patterns to reconstruct struct definitions, id"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-symless
---

# symless

**Author:** thalium
**Source:** mcp-gamehacking/skills/ags-symless

## Description

This project is Symless, an IDA Pro plugin for automated structure and type recovery from stripped binaries. It uses data flow analysis and memory access patterns to reconstruct struct definitions, identify field types and sizes, and propagate type information across functions without requiring debug symbols. The Python plugin improves IDA's decompilation output for stripped binaries. It is aimed at reverse engineers working with stripped C/C++ binaries who need automated type reconstruction.
