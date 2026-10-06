---
name: ags-ida-wpp-remover
description: "WPP Remover is an IDA Pro plugin that cleans Hex-Rays pseudocode by removing Windows Performance Profiling call noise."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-wpp-remover
---

# IDA WPP Remover

**Author:** L4ys
**Source:** mcp-gamehacking/skills/ags-ida-wpp-remover

## Description

WPP Remover is an IDA Pro plugin that cleans Hex-Rays pseudocode by removing Windows Performance Profiling call noise.
It is implemented in Python and applies a microcode optimization pass to replace WPP_SF* calls before decompiler output is generated.
The plugin automatically targets Windows PE analysis and can be toggled directly from the decompiled view.
It is designed for reverse engineers who want clearer decompilation results during malware and game binary analysis.
