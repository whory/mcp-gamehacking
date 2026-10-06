---
name: ags-kernel-dwm
description: "This project is a Windows kernel-mode overlay rendering technique that hooks into the Desktop Window Manager (DWM) composition pipeline from kernel space. It intercepts DWM's DirectX rendering calls a"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-dwm
---

# KernelDwm

**Author:** cs1ime
**Source:** mcp-gamehacking/skills/ags-kernel-dwm

## Description

This project is a Windows kernel-mode overlay rendering technique that hooks into the Desktop Window Manager (DWM) composition pipeline from kernel space. It intercepts DWM's DirectX rendering calls at the kernel level to inject custom draw commands into the desktop compositor, creating overlays that are invisible to user-mode anti-cheat detection. The C driver demonstrates kernel-level DWM hooking for covert overlay rendering. It is aimed at kernel researchers studying DWM composition internals and stealthy overlay techniques.
