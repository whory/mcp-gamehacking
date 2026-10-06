---
name: ags-mono-external-lib
description: "This project is an external library for reading Unity/Mono game internals from outside the game process on Windows. It parses Mono runtime metadata structures externally through process memory reading"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mono-external-lib
---

# mono external lib

**Author:** reahly
**Source:** mcp-gamehacking/skills/ags-mono-external-lib

## Description

This project is an external library for reading Unity/Mono game internals from outside the game process on Windows. It parses Mono runtime metadata structures externally through process memory reading to enumerate classes, methods, fields, and their offsets without injection. The C++ library reconstructs the Mono type system from raw memory to enable external cheat development for Unity Mono games. It is aimed at game hackers and security researchers studying external access to Mono/.NET game internals.
