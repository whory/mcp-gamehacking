---
name: ags-gmh5225-dwmhook
description: "This project is a Windows Desktop Window Manager (DWM) hooking proof of concept that intercepts DWM's rendering pipeline to draw custom overlays. It hooks DWM composition functions to inject draw call"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-gmh5225-dwmhook
---

# dwmhook

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-gmh5225-dwmhook

## Description

This project is a Windows Desktop Window Manager (DWM) hooking proof of concept that intercepts DWM's rendering pipeline to draw custom overlays. It hooks DWM composition functions to inject draw calls into the desktop compositor, rendering overlays that appear on top of any window without creating a separate overlay window. It is aimed at game security researchers studying DWM-based overlay rendering techniques.
