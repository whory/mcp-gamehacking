---
name: ags-kernel-overlay-hider
description: "This project is a proof of concept that hides an overlay window handle from window enumeration by manipulating kernel-side window structures."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-overlay-hider
---

# Kernel Overlay Hider

**Author:** J0xna
**Source:** mcp-gamehacking/skills/ags-kernel-overlay-hider

## Description

This project is a proof of concept that hides an overlay window handle from window enumeration by manipulating kernel-side window structures.
It uses a Windows kernel driver plus user-mode test programs to locate and modify win32k related pointers and TAGWND-linked data.
The code focuses on DKOM-style techniques and includes examples for triggering the behavior from a DirectX overlay context.
It is intended for low-level Windows internals research around overlay visibility and anti-cheat evasion mechanics.
