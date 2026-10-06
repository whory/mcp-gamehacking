---
name: ags-and-ue4dumper
description: "This project is an Android Unreal Engine dumping toolkit that generates SDK-style output and analysis artifacts from running games."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-and-ue4dumper
---

# AndUE4Dumper

**Author:** MJx0
**Source:** mcp-gamehacking/skills/ags-and-ue4dumper

## Description

This project is an Android Unreal Engine dumping toolkit that generates SDK-style output and analysis artifacts from running games.
It is written primarily in C++ for the Android NDK and can be built as either an external executable or an injectable shared library.
Key capabilities include dumping engine offsets, classes, structs, enums, and functions, plus producing JSON symbol scripts for disassemblers such as IDA and Ghidra.
It is mainly used by mobile game reverse engineers and game security researchers who need structured Unreal Engine metadata for deeper analysis.
