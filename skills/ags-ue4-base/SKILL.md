---
name: ags-ue4-base
description: "ue4_base is a C++ Unreal Engine 4 cheat base that provides reusable SDK wrappers and hook infrastructure."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ue4-base
---

# ue4 base

**Author:** YMY1666527646
**Source:** mcp-gamehacking/skills/ags-ue4-base

## Description

ue4_base is a C++ Unreal Engine 4 cheat base that provides reusable SDK wrappers and hook infrastructure.
It hooks UE4 rendering paths such as PostRender with MinHook and exposes helpers for world, actor, and canvas interactions.
The code uses libraries like lazy_importer and xorstr, and demonstrates world-to-screen drawing of in-game actors.
Its main use case is game security research and rapid prototyping of external or internal UE4 analysis tools.
