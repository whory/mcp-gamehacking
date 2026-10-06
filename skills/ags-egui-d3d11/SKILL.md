---
name: ags-egui-d3d11
description: "A Rust library that renders egui (an immediate-mode GUI framework) directly onto Direct3D 11 surfaces, designed for building in-game overlay menus by hooking the D3D11 Present call."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-egui-d3d11
---

# egui d3d11

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-egui-d3d11

## Description

A Rust library that renders egui (an immediate-mode GUI framework) directly onto Direct3D 11 surfaces, designed for building in-game overlay menus by hooking the D3D11 Present call.
The library converts egui mesh output into D3D11 vertex/index buffers, compiles HLSL shaders for textured triangle rendering, manages texture uploads from egui's font atlas, and handles Win32 input translation (keyboard, mouse) to egui's input format, with state backup/restore to avoid corrupting the game's rendering pipeline.
It is mainly useful for game cheat developers and security researchers building or studying ImGui-style overlay menus injected into DirectX 11 games via Present hooks.
