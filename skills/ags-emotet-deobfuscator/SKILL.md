---
name: ags-emotet-deobfuscator
description: "This project is an IDA Hex-Rays plugin that deobfuscates control-flow logic commonly seen in Emotet samples."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-emotet-deobfuscator
---

# emotet deobfuscator

**Author:** ElvisBlue
**Source:** mcp-gamehacking/skills/ags-emotet-deobfuscator

## Description

This project is an IDA Hex-Rays plugin that deobfuscates control-flow logic commonly seen in Emotet samples.
It is written in Python and uses the IDA microcode API to identify dispatcher registers, status values, and flattened branch patterns.
The plugin rewrites block transitions, inserts corrected jump targets, and cleans leftover dispatch instructions to produce clearer pseudocode.
Its primary use case is malware reverse engineering and analysis of heavily obfuscated binaries.
