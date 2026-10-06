---
name: ags-dwm-overlay
description: "This project is a DLL-based DWM overlay proof of concept for Windows that hooks desktop composition rendering. It is implemented in C++ with MinHook, DirectX 11, and ImGui, and uses pattern scanning t"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dwm-overlay
---

# dwm overlay

**Author:** LoxTus
**Source:** mcp-gamehacking/skills/ags-dwm-overlay

## Description

This project is a DLL-based DWM overlay proof of concept for Windows that hooks desktop composition rendering. It is implemented in C++ with MinHook, DirectX 11, and ImGui, and uses pattern scanning to locate the target present routine in dwmcore. After hooking, it initializes a D3D11 render path and draws custom UI content through the swap chain. The project is mainly useful for graphics hook research, overlay experimentation, and understanding desktop-level rendering interception.
