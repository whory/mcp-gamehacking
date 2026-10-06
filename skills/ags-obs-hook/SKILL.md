---
name: ags-obs-hook
description: "This project demonstrates hooking into OBS Studio's graphics capture system to render custom overlays through OBS's trusted rendering pipeline. By hijacking OBS's game capture hook DLL, custom draw ca"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-obs-hook
---

# OBS Hook

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-obs-hook

## Description

This project demonstrates hooking into OBS Studio's graphics capture system to render custom overlays through OBS's trusted rendering pipeline. By hijacking OBS's game capture hook DLL, custom draw calls can be injected into the captured game's frame without creating a separate overlay window. This technique exploits OBS's whitelisted status in anti-cheat systems. It is aimed at game security researchers studying overlay rendering through trusted application hijacking.
