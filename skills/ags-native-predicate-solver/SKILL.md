---
name: ags-native-predicate-solver
description: "This project is a native Binary Ninja plugin for removing opaque predicates from obfuscated binaries. It is implemented in modern C++ and analyzes MLIL conditional branches to detect always-true or al"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-native-predicate-solver
---

# native predicate solver

**Author:** ScriptWare-Software
**Source:** mcp-gamehacking/skills/ags-native-predicate-solver

## Description

This project is a native Binary Ninja plugin for removing opaque predicates from obfuscated binaries. It is implemented in modern C++ and analyzes MLIL conditional branches to detect always-true or always-false conditions. The plugin supports single-function and whole-binary passes, configurable limits, and multithreaded processing for speed on large programs. It is intended for reverse engineers who need faster deobfuscation workflows during malware analysis or protected binary research.
