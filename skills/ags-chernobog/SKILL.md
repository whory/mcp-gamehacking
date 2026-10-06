---
name: ags-chernobog
description: "This project is a Hex-Rays decompiler plugin for automatically reversing Hikari LLVM obfuscation in IDA Pro."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-chernobog
---

# chernobog

**Author:** 19h
**Source:** mcp-gamehacking/skills/ags-chernobog

## Description

This project is a Hex-Rays decompiler plugin for automatically reversing Hikari LLVM obfuscation in IDA Pro.
It restores control flow from flattening and bogus branches, resolves indirect control transfers, and recovers encrypted data constructs.
The plugin is implemented mainly in C++ and applies symbolic reasoning with Z3 plus extensive MBA simplification rules.
Its primary use case is reverse engineering heavily obfuscated binaries in malware and game security research.
