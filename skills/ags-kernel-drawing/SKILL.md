---
name: ags-kernel-drawing
description: "This project is a proof-of-concept Windows kernel driver for drawing graphics without installing traditional hooks. It is implemented in C++ and focuses on calling GDI-related kernel paths by spoofing"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-drawing
---

# KernelDrawing

**Author:** Sentient111
**Source:** mcp-gamehacking/skills/ags-kernel-drawing

## Description

This project is a proof-of-concept Windows kernel driver for drawing graphics without installing traditional hooks. It is implemented in C++ and focuses on calling GDI-related kernel paths by spoofing required thread context values to satisfy internal checks. The sample includes supporting primitives and notes about version-dependent NT offsets and loading methods. It is mainly used for low-level graphics and anti-cheat evasion research in controlled environments.
