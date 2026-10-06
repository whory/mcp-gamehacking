---
name: ags-eft-mono-eft
description: "A Mono-based internal cheat for Escape From Tarkov written in C# that hooks into the Unity/Mono runtime to provide ESP (box, name, distance, health bars), silent aim, no-recoil, speed hacks, infinite "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eft-mono-eft
---

# EFT MonoEFT

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-eft-mono-eft

## Description

A Mono-based internal cheat for Escape From Tarkov written in C# that hooks into the Unity/Mono runtime to provide ESP (box, name, distance, health bars), silent aim, no-recoil, speed hacks, infinite stamina, and loot ESP through method hooking and direct game object manipulation.
The cheat walks EFT's GameWorld.RegisteredPlayers list to enumerate players, reads PlayerBones for skeleton-based world-to-screen projection via Camera.WorldToScreenPoint, hooks methods like CreateShot/ApplyShot/BulletMovement for bullet manipulation, and renders overlays using Unity's OnGUI/GUI.DrawTexture with a custom ImGui-style menu system.
It is mainly useful for game security researchers studying Mono/.NET injection techniques, Unity game object introspection, and method-hooking attack surfaces in Escape From Tarkov.
