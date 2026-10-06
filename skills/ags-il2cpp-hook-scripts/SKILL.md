---
name: ags-il2cpp-hook-scripts
description: "This project is a Frida-based runtime parsing and hooking framework for Unity IL2CPP games, published as the il2cpp-hooker npm package."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-il2cpp-hook-scripts
---

# Il2CppHookScripts

**Author:** axhlzy
**Source:** mcp-gamehacking/skills/ags-il2cpp-hook-scripts

## Description

This project is a Frida-based runtime parsing and hooking framework for Unity IL2CPP games, published as the il2cpp-hooker npm package.
It provides runtime parsing of IL2CPP methods, classes, fields, and instances, batch hooking utilities, function return value modification, object hierarchy printing, disassembly with method info, and QBDI-based function emulation.
The TypeScript codebase includes JNI RegisterNatives hooking, Il2CppMethod inspection, game object detail display, and an MCP companion version.
It is mainly useful for mobile game security researchers and reverse engineers performing runtime analysis and instrumentation of Unity IL2CPP games with Frida.
