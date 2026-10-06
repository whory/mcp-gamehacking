---
name: ags-il2cpp-sdk-generator
description: "This project generates C++ SDK headers and wrappers from Unity IL2CPP DummyDll assemblies for Android-focused games. It combines a C# generator based on dnlib with C++ runtime helper headers to resolv"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-il2cpp-sdk-generator
---

# Il2CppSDKGenerator

**Author:** Octowolve
**Source:** mcp-gamehacking/skills/ags-il2cpp-sdk-generator

## Description

This project generates C++ SDK headers and wrappers from Unity IL2CPP DummyDll assemblies for Android-focused games. It combines a C# generator based on dnlib with C++ runtime helper headers to resolve classes, methods, fields, and il2cpp exports in native code. The produced output lets developers include generated namespaces and classes directly and interact with game logic from external modules. It is mainly used in Unity reverse engineering and game security research workflows.
