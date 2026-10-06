---
name: ags-mono-hook
description: "This project is a runtime method hooking framework for C# in Unity and Mono or IL2CPP environments. It modifies JIT or AOT native code in memory instead of patching files on disk, and it is designed t"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mono-hook
---

# MonoHook

**Author:** Misaka-Mikoto-Tech
**Source:** mcp-gamehacking/skills/ags-mono-hook

## Description

This project is a runtime method hooking framework for C# in Unity and Mono or IL2CPP environments. It modifies JIT or AOT native code in memory instead of patching files on disk, and it is designed to preserve debugging behavior and stack traces. The implementation is centered on C# with a small native component and supports multiple Unity generations and .NET runtime variants across editor and device targets. Its main use case is Unity instrumentation, reverse engineering, and game security research that requires controlled function replacement.
