---
name: ags-valorant-external-cheat
description: "VEX is an open-source external cheat for Valorant implemented as a modular C++20 Windows application called VEX. It reads Unreal Engine 5 game state from outside the process through a kernel driver ab"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-valorant-external-cheat
---

# Valorant External Cheat

**Author:** bootmgfw
**Source:** mcp-gamehacking/skills/ags-valorant-external-cheat

## Description

VEX is an open-source external cheat for Valorant implemented as a modular C++20 Windows application called VEX. It reads Unreal Engine 5 game state from outside the process through a kernel driver abstraction that supports cross-process memory access, pattern scanning, and mouse input, paired with an SDK for UWorld, actors, bones, and camera data. Feature modules include aimbot with bone mapping and FOV selection, triggerbot, ability lineup helpers, and a DirectX 11 overlay GUI built with ImGui, while a dedicated VGK system handles Valorant-specific offsets and encrypted game data. The architecture separates application lifecycle, driver, rendering, and game logic behind injectable interfaces, and release builds add LLVM-based obfuscation. It is primarily useful for game security research, anti-cheat analysis, and studying external cheat design against Vanguard-protected titles.
