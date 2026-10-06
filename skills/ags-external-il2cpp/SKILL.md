---
name: ags-external-il2cpp
description: "This project is an external C++ framework for navigating IL2CPP metadata and game structures from another process."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-external-il2cpp
---

# external il2cpp

**Author:** Compiled-Code
**Source:** mcp-gamehacking/skills/ags-external-il2cpp

## Description

This project is an external C++ framework for navigating IL2CPP metadata and game structures from another process.
It uses WinAPI process and module discovery with ReadProcessMemory-based access to enumerate assemblies, images, classes, and fields by name.
The code provides lightweight abstractions for resolving static and instance field addresses from GameAssembly offset data.
Its primary use case is Unity IL2CPP reverse engineering and external tooling development for game security research.
