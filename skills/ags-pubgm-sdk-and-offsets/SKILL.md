---
name: ags-pubgm-sdk-and-offsets
description: "A dumped SDK and offset collection for PUBG Mobile (versions 1.5 and 1.9) containing full UE4 class hierarchy definitions with member offsets, function addresses, and type information extracted from t"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pubgm-sdk-and-offsets
---

# pubgm sdk and offsets

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-pubgm-sdk-and-offsets

## Description

A dumped SDK and offset collection for PUBG Mobile (versions 1.5 and 1.9) containing full UE4 class hierarchy definitions with member offsets, function addresses, and type information extracted from the game's reflection system.
The SDK files enumerate hundreds of UE4 classes including World, Level, PlayerController, Character, PrimitiveComponent, SkeletalMeshComponent, and weapon/vehicle types with precise byte offsets, bitmask fields, and virtual function pointers for the ARM32 mobile build, covering rendering, physics, networking, and gameplay subsystems.
It is mainly useful for mobile game security researchers studying PUBG Mobile's UE4 memory layout, building external/internal cheats, or analyzing anti-cheat coverage on Android.
