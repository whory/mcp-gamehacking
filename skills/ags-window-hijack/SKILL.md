---
name: ags-window-hijack
description: "This project is a C++ proof of concept for external overlay window hijacking on Windows. It explores using an existing overlay window model while preserving native window flags and capturing input thr"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-window-hijack
---

# Window Hijack

**Author:** SurgeGotTappedAgain
**Source:** mcp-gamehacking/skills/ags-window-hijack

## Description

This project is a C++ proof of concept for external overlay window hijacking on Windows. It explores using an existing overlay window model while preserving native window flags and capturing input through SetWindowsHookEx. The code includes DirectX11 and ImGui components for rendering along with dedicated input handling modules. It is primarily aimed at game security and anti-cheat researchers analyzing overlay-based tooling and visibility or detection tradeoffs.
