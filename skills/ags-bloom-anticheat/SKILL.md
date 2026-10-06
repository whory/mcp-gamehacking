---
name: ags-bloom-anticheat
description: "This project is a multi-component Windows x64 anti-cheat prototype that combines kernel and user-mode protections. Its driver layer uses callback mechanisms such as ObRegisterCallbacks to protect the "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bloom-anticheat
---

# Bloom Anticheat

**Author:** Rycooop
**Source:** mcp-gamehacking/skills/ags-bloom-anticheat

## Description

This project is a multi-component Windows x64 anti-cheat prototype that combines kernel and user-mode protections. Its driver layer uses callback mechanisms such as ObRegisterCallbacks to protect the anti-cheat process and target process from hostile handle operations. The repository includes supporting DLL and application code, plus build setup for Visual Studio projects. It is intended for anti-cheat experimentation and for studying practical tradeoffs between kernel callbacks and user-mode monitoring.
