---
name: ags-no-screen
description: "This project is a kernel-assisted window protection tool intended to prevent screen capture."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-no-screen
---

# NoScreen

**Author:** KANKOSHEV
**Source:** mcp-gamehacking/skills/ags-no-screen

## Description

This project is a kernel-assisted window protection tool intended to prevent screen capture.
It provides behavior similar to display affinity protection while trying to reduce straightforward user-mode detection vectors.
The implementation uses a custom driver and device interface so protection can be applied without modifying target process memory directly.
It is mainly used in privacy, anti-capture, and game anti-cheat research contexts.
