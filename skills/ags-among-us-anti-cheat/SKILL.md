---
name: ags-among-us-anti-cheat
description: "Apex Cheat Ender is a client-side anti-cheat plugin for Among Us (IL2CPP) that detects and responds to common multiplayer cheats in hosted lobbies. Written in C# as a BepInEx 6 plugin using Harmony an"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-among-us-anti-cheat
---

# AmongUsAntiCheat

**Author:** hckerelauk-git
**Source:** mcp-gamehacking/skills/ags-among-us-anti-cheat

## Description

Apex Cheat Ender is a client-side anti-cheat plugin for Among Us (IL2CPP) that detects and responds to common multiplayer cheats in hosted lobbies. Written in C# as a BepInEx 6 plugin using Harmony and Il2CppInterop, it combines static scanning of loaded BepInEx mods against a cheat signature database, event hooks on kills, tasks, vents, and position sync, and kinematic behavior analysis for teleport, speed, and wall-clip abuse. A verdict engine aggregates evidence with time decay and configurable thresholds, optionally auto-kicking offenders when the local player is host. It includes in-game monitoring and settings UI plus desktop splash feedback, and targets hosts and mod developers who need explainable, rule-based client protection for private Among Us sessions.
