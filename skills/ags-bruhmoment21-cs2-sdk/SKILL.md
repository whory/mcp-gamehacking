---
name: ags-bruhmoment21-cs2-sdk
description: "This project is a Counter-Strike 2 SDK written in C++ that supports both Windows and Linux with DirectX 11 and Vulkan rendering backends."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bruhmoment21-cs2-sdk
---

# cs2 sdk

**Author:** bruhmoment21
**Source:** mcp-gamehacking/skills/ags-bruhmoment21-cs2-sdk

## Description

This project is a Counter-Strike 2 SDK written in C++ that supports both Windows and Linux with DirectX 11 and Vulkan rendering backends.
It provides a simplified Source 2 SDK implementation kept close to the original engine code, with features for game manipulation and an ImGui-based menu system.
The cross-platform codebase supports DLL injection via LoadLibrary on Windows and dlopen on Linux, with manual mapping requiring specific compiler flags.
It is mainly useful for game security researchers studying Source 2 engine internals and CS2 SDK structures across multiple platforms.
