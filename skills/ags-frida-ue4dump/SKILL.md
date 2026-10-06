---
name: ags-frida-ue4dump
description: "This project is a Frida script for dumping Unreal Engine 4 SDK information from running Android games. It hooks into UE4's reflection system through Frida instrumentation to enumerate UObject classes,"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-frida-ue4dump
---

# frida ue4dump

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-frida-ue4dump

## Description

This project is a Frida script for dumping Unreal Engine 4 SDK information from running Android games. It hooks into UE4's reflection system through Frida instrumentation to enumerate UObject classes, extract property offsets, dump function signatures, and generate SDK headers from mobile UE4 games at runtime. It is aimed at mobile game reverse engineers dumping UE4 SDKs from Android games using Frida-based instrumentation.
