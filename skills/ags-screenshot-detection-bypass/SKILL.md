---
name: ags-screenshot-detection-bypass
description: "Screenshot-Detection-Bypass is a C++ proof of concept that hooks the BitBlt API in gdi32 to return clean captures instead of the modified game frame."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-screenshot-detection-bypass
---

# Screenshot Detection Bypass

**Author:** Mes2d
**Source:** mcp-gamehacking/skills/ags-screenshot-detection-bypass

## Description

Screenshot-Detection-Bypass is a C++ proof of concept that hooks the BitBlt API in gdi32 to return clean captures instead of the modified game frame.
The project demonstrates how anti-cheat screenshot pipelines can be intercepted at the Windows graphics API layer, with a simple class-based hook and settings structure.
Its implementation focuses on readability so readers can understand the call flow from the original function to the hooked handler.
The main use case is educational anti-cheat research around screenshot detection evasion and capture-hook behavior.
