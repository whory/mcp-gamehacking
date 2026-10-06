---
name: ags-universal-dear-im-gui-hook
description: "This project is a Windows graphics hook that injects a Dear ImGui overlay into applications using multiple rendering backends. It is written in C++ and targets Direct3D 9, 10, 11, and 12 with partial "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-universal-dear-im-gui-hook
---

# Universal Dear ImGui Hook

**Author:** Sh0ckFR
**Source:** mcp-gamehacking/skills/ags-universal-dear-im-gui-hook

## Description

This project is a Windows graphics hook that injects a Dear ImGui overlay into applications using multiple rendering backends. It is written in C++ and targets Direct3D 9, 10, 11, and 12 with partial Vulkan support through backend-specific hook implementations. The code integrates common hooking components and input handling so users can toggle an in-process UI menu after DLL injection. It is primarily used for game overlay prototyping, debugging interfaces, and rendering pipeline research.
