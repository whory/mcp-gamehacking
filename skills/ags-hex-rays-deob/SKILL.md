---
name: ags-hex-rays-deob
description: "This project is a Hex-Rays microcode plugin for deobfuscating protected binaries. It is written in C++ against the IDA and Hex-Rays SDK and includes pattern-based simplification passes for obfuscated "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hex-rays-deob
---

# HexRaysDeob

**Author:** RolfRolles
**Source:** mcp-gamehacking/skills/ags-hex-rays-deob

## Description

This project is a Hex-Rays microcode plugin for deobfuscating protected binaries. It is written in C++ against the IDA and Hex-Rays SDK and includes pattern-based simplification passes for obfuscated expressions. It also implements control-flow unflattening logic that reconstructs dispatcher-driven flattened regions and cleans up unreachable blocks. The tool is intended for reverse engineering workflows, including analysis of obfuscated game and malware code.
