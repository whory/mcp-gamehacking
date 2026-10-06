---
name: ags-kernel-gdi-draw
description: "This project is a kernel-mode drawing proof of concept that hooks NtGdiDdDDISubmitCommand and renders with win32k GDI routines. It is implemented in C/C++ with WDK-style driver code and uses InfinityH"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-gdi-draw
---

# KernelGDIDraw

**Author:** BadPlayer555
**Source:** mcp-gamehacking/skills/ags-kernel-gdi-draw

## Description

This project is a kernel-mode drawing proof of concept that hooks NtGdiDdDDISubmitCommand and renders with win32k GDI routines. It is implemented in C/C++ with WDK-style driver code and uses InfinityHook-based syscall interception techniques. The implementation demonstrates synchronized drawing tied to screen update flow, while documenting practical drawbacks such as extra latency. The primary use case is low-level graphics-hook research and anti-cheat evasion experimentation.
