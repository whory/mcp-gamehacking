---
name: ags-universal-hook-x
description: "This project is a universal graphics API hooking library for Windows that supports rendering ImGui overlays across multiple rendering backends."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-universal-hook-x
---

# UniversalHookX

**Author:** bruhmoment21
**Source:** mcp-gamehacking/skills/ags-universal-hook-x

## Description

This project is a universal graphics API hooking library for Windows that supports rendering ImGui overlays across multiple rendering backends.
It hooks DirectX 9/9Ex, DirectX 10, DirectX 11, DirectX 12, OpenGL (via wglSwapBuffers), and Vulkan (via vkQueuePresentKHR) using dummy device creation to obtain vtable pointers for each backend.
The C++ DLL provides a unified architecture where each backend follows the same hooking pattern with configurable backend selection at compile time.
It is mainly useful for game security researchers and overlay developers studying graphics API interception and cross-backend ImGui rendering techniques.
