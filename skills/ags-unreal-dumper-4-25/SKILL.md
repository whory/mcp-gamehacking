---
name: ags-unreal-dumper-4-25
description: "This project is an external Unreal Engine 4.25+ SDK dumper written in C++ that extracts class definitions, property offsets, and function signatures from a running UE4 game process. It locates GObject"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-unreal-dumper-4-25
---

# UnrealDumper 4.25

**Author:** guttir14
**Source:** mcp-gamehacking/skills/ags-unreal-dumper-4-25

## Description

This project is an external Unreal Engine 4.25+ SDK dumper written in C++ that extracts class definitions, property offsets, and function signatures from a running UE4 game process. It locates GObjects and GNames arrays through pattern scanning, walks the UObject hierarchy, and outputs a complete SDK with struct layouts and inheritance chains. The tool operates externally without injection, reading game memory through process handles. It is aimed at game hackers and reverse engineers generating Unreal Engine SDKs for cheat development or game analysis.
