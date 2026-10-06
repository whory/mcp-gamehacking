---
name: ags-d3d-overlay-nvidia-hijack
description: "D3DOverlay-Nvidia-Hijack is a Direct3D9 overlay framework that renders ImGui content through the NVIDIA GeForce Overlay window. The C++ implementation locates the existing overlay window, configures t"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-d3d-overlay-nvidia-hijack
---

# D3DOverlay Nvidia Hijack

**Author:** Brattlof
**Source:** mcp-gamehacking/skills/ags-d3d-overlay-nvidia-hijack

## Description

D3DOverlay-Nvidia-Hijack is a Direct3D9 overlay framework that renders ImGui content through the NVIDIA GeForce Overlay window. The C++ implementation locates the existing overlay window, configures transparent click-through behavior, and drives a per-frame render callback. It also provides helper drawing primitives for text, rectangles, and circles on top of the target display surface. The project is mainly used in external game tooling scenarios that need a reusable overlay layer with minimal custom window management.
