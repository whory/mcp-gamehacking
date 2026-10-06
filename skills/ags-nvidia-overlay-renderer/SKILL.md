---
name: ags-nvidia-overlay-renderer
description: "This project is a Windows overlay renderer that hijacks NVIDIA GeForce Experience's overlay window for rendering custom content. It locates the NVIDIA overlay window, obtains its rendering context, an"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nvidia-overlay-renderer
---

# nvidia overlay renderer

**Author:** es3n1n
**Source:** mcp-gamehacking/skills/ags-nvidia-overlay-renderer

## Description

This project is a Windows overlay renderer that hijacks NVIDIA GeForce Experience's overlay window for rendering custom content. It locates the NVIDIA overlay window, obtains its rendering context, and draws ImGui menus or ESP information through the existing trusted overlay surface. This approach avoids creating new overlay windows that anti-cheat systems would detect. It is aimed at game security researchers studying overlay hijacking techniques and anti-cheat overlay detection bypass.
