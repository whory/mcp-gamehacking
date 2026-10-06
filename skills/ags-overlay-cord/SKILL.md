---
name: ags-overlay-cord
description: "This project is a proof of concept that hijacks Discord's internal game overlay pipeline from an external process."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-overlay-cord
---

# OverlayCord

**Author:** SamuelTulach
**Source:** mcp-gamehacking/skills/ags-overlay-cord

## Description

This project is a proof of concept that hijacks Discord's internal game overlay pipeline from an external process.
It is written in C++ and demonstrates framebuffer sharing abuse without modifying Discord files, injecting Discord modules, or installing API hooks.
The sample includes reusable overlay code and example integration for rendering through the trusted overlay path.
It is mainly used in game security and anti-cheat research to study overlay trust boundaries and detection blind spots.
