---
name: ags-nvidia-overlay
description: "This project demonstrates hijacking the NVIDIA GeForce Experience overlay window for rendering custom game overlays. It locates the NVIDIA overlay's rendering surface and injects custom DirectX draw c"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nvidia-overlay
---

# NVIDIA OVERLAY

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-nvidia-overlay

## Description

This project demonstrates hijacking the NVIDIA GeForce Experience overlay window for rendering custom game overlays. It locates the NVIDIA overlay's rendering surface and injects custom DirectX draw calls through it, creating overlays that appear through a trusted system process and avoid anti-cheat overlay detection. It is aimed at game security researchers studying NVIDIA overlay hijacking as an anti-cheat bypass technique.
