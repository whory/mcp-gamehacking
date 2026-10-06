---
name: ags-mfxiaosheng-dwmhook
description: "Desktop Window Manager overlay rendering framework that hooks DWM's DirectX 11 vtable to draw ImGui-based overlays on top of all windows. Uses reflective DLL injection, MinHook/PolyHook2 for vtable in"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mfxiaosheng-dwmhook
---

# dwmhook

**Author:** mfxiaosheng
**Source:** mcp-gamehacking/skills/ags-mfxiaosheng-dwmhook

## Description

Desktop Window Manager overlay rendering framework that hooks DWM's DirectX 11 vtable to draw ImGui-based overlays on top of all windows. Uses reflective DLL injection, MinHook/PolyHook2 for vtable interception, FW1FontWrapper for DirectWrite text rendering, and PDB symbol resolution (via DIA SDK) for locating internal DWM compositor functions.
