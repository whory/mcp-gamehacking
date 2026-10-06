---
name: ags-microavx
description: "IDA Pro plugin that extends the Hex-Rays decompiler by lifting Intel AVX (Advanced Vector Extensions) instructions into Hex-Rays microcode, enabling their decompilation in functions that would otherwi"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-microavx
---

# microavx

**Author:** gaasedelen
**Source:** mcp-gamehacking/skills/ags-microavx

## Description

IDA Pro plugin that extends the Hex-Rays decompiler by lifting Intel AVX (Advanced Vector Extensions) instructions into Hex-Rays microcode, enabling their decompilation in functions that would otherwise show opaque "ext" nodes. It implements a custom microcode instruction visitor that intercepts m_ext opcodes and replaces them with equivalent microcode sequences. A companion scraping script enumerates all unsupported instructions across an IDB to identify AVX coverage gaps.
