---
name: ags-ue4injector
description: "UE4Injector is a proof-of-concept C++ injector that demonstrates an Unreal Engine 4 vulnerability for loading shellcode or DLL payloads into target game processes."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ue4injector
---

# UE4Injector

**Author:** Zebratic
**Source:** mcp-gamehacking/skills/ags-ue4injector

## Description

UE4Injector is a proof-of-concept C++ injector that demonstrates an Unreal Engine 4 vulnerability for loading shellcode or DLL payloads into target game processes.
It ships as a Visual Studio project with command-line usage patterns, build guidance, and practical notes about privilege requirements and deployment.
The repository documents how the injection workflow works and frames the code as legacy research that may still affect unpatched UE4 titles.
Its main use case is security research into UE4 process-injection vectors and their anti-cheat implications.
