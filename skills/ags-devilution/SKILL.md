---
name: ags-devilution
description: "Complete reverse engineering of the original Diablo 1 retail Windows binary into compilable C/C++ source code, reconstructing all game subsystems including dungeon generation (drlg_l1–l4), rendering"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-devilution
---

# devilution

**Author:** galaxyhaxz
**Source:** mcp-gamehacking/skills/ags-devilution

## Description

Complete reverse engineering of the original Diablo 1 retail Windows binary into compilable C/C++ source code, reconstructing all game subsystems including dungeon generation (drlg_l1–l4), rendering pipeline, spell/item/monster data tables, multiplayer networking, save/load serialization, and the Storm MPQ archive library. The project preserves the original MSVC 4.20 project structure and includes the DiabloUI and Storm DLL sources, with build support for modern compilers alongside the original DSP/DSW files.
