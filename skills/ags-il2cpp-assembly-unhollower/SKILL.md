---
name: ags-il2cpp-assembly-unhollower
description: "This project is IL2CPP Assembly Unhollower, a tool that generates proxy .NET assemblies from IL2CPP metadata, enabling C# mods to interact with IL2CPP-compiled Unity games as if they were standard Mon"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-il2cpp-assembly-unhollower
---

# Il2CppAssemblyUnhollower

**Author:** knah
**Source:** mcp-gamehacking/skills/ags-il2cpp-assembly-unhollower

## Description

This project is IL2CPP Assembly Unhollower, a tool that generates proxy .NET assemblies from IL2CPP metadata, enabling C# mods to interact with IL2CPP-compiled Unity games as if they were standard Mono assemblies. It processes IL2CPP global-metadata.dat and binary dumps to reconstruct type definitions, method signatures, and field layouts, generating wrapper assemblies that delegate calls to native IL2CPP methods. It is aimed at Unity modders and game security researchers working with IL2CPP builds where direct .NET reflection is unavailable.
