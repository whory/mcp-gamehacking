---
name: ags-elden-ring-launcher
description: "A custom Elden Ring launcher built with ImGui (rendered via SDL2) that provides a graphical interface for configuring and launching the game with modified settings, including anti-cheat bypass options"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-elden-ring-launcher
---

# EldenRingLauncher

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-elden-ring-launcher

## Description

A custom Elden Ring launcher built with ImGui (rendered via SDL2) that provides a graphical interface for configuring and launching the game with modified settings, including anti-cheat bypass options and mod loading capabilities.
The application bundles the full ImGui library with SDL2 renderer backend, uses a Resources library for embedded assets, and presents a user-friendly window for toggling launch parameters before starting the game executable.
It is mainly useful for Elden Ring modders and game security researchers studying custom launcher implementations that interface with or bypass Easy Anti-Cheat.
