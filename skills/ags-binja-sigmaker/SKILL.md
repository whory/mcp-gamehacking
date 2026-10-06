---
name: ags-binja-sigmaker
description: "This project is a Binary Ninja plugin for generating byte-pattern signatures from disassembled functions."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-binja-sigmaker
---

# binja sigmaker

**Author:** apekros
**Source:** mcp-gamehacking/skills/ags-binja-sigmaker

## Description

This project is a Binary Ninja plugin for generating byte-pattern signatures from disassembled functions.
It emits IDA-style wildcard signatures suitable for pattern scanning and can fall back to function-start signatures when needed.
The implementation is written in Python and packaged for Binary Ninja plugin manager compatibility.
It is mainly useful for reverse engineering, cheat or anti-cheat signature work, and binary update diffing tasks.
