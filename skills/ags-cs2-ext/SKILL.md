---
name: ags-cs2-ext
description: "CS2-EXT is an external cheat framework for Counter-Strike 2 that runs outside the game process and reads or manipulates game memory from a separate Windows application. It is implemented in C++17 as a"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cs2-ext
---

# cs2 ext

**Author:** hendodev
**Source:** mcp-gamehacking/skills/ags-cs2-ext

## Description

CS2-EXT is an external cheat framework for Counter-Strike 2 that runs outside the game process and reads or manipulates game memory from a separate Windows application. It is implemented in C++17 as a Visual Studio x64 project and organizes core logic around game offsets, vector math, cheat features, and a configurable menu. Memory access is abstracted through a kernel driver interface, while an ImGui-based overlay rendered with DirectX 11 and DXGI provides an in-game menu and visual feedback. The project is aimed at game security researchers, reverse engineers, and anti-cheat analysts studying external cheat techniques, memory layout, and kernel-assisted process interaction in modern FPS titles.
