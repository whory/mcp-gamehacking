---
name: ags-csgo-cheat
description: "A modular C++17 framework for building an external Counter-Strike: Global Offensive overlay that reads and writes game process memory on Windows. It combines a MemoryReader module with pattern scannin"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-csgo-cheat
---

# csgo cheat

**Author:** manka81
**Source:** mcp-gamehacking/skills/ags-csgo-cheat

## Description

A modular C++17 framework for building an external Counter-Strike: Global Offensive overlay that reads and writes game process memory on Windows. It combines a MemoryReader module with pattern scanning and offset auto-detection (including hazedumper presets), 3D world-to-screen math, and a transparent DirectX 11 Dear ImGui overlay for rendering ESP boxes, skeletons, snaplines, and HUD elements. The project implements aim assist, triggerbot, no-recoil compensation, bunny hop, and camera rotation via WriteProcessMemory and SendInput, with configuration persisted in INI files. Written primarily in C++ with a small Python helper for memory operations, it targets game security researchers, reverse engineers, and anti-cheat analysts studying external cheat techniques and client-side memory manipulation.
