---
name: ags-unreal-sdk-dumper-4-25
description: "UnrealSDKDumper is a C++ utility that generates compilable SDK output from Unreal Engine 4.23 to 4.27 games. It includes dependency-aware class ordering, identifier sanitization, and generation of a r"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-unreal-sdk-dumper-4-25
---

# UnrealSDKDumper 4.25

**Author:** BobHUnrealTech
**Source:** mcp-gamehacking/skills/ags-unreal-sdk-dumper-4-25

## Description

UnrealSDKDumper is a C++ utility that generates compilable SDK output from Unreal Engine 4.23 to 4.27 games. It includes dependency-aware class ordering, identifier sanitization, and generation of a ready-to-include sdk.h and SDK folder. The implementation also adds handling for wide-character Chinese names so exported classes, members, and functions remain usable. It is mainly used by Unreal reverse engineering practitioners who need accurate metadata for analysis, tooling, or gameplay modification research.
