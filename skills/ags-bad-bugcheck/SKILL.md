---
name: ags-bad-bugcheck
description: "This project is an updated kernel BSOD visual hack that renders Bad Apple frames through the crash framebuffer path."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bad-bugcheck
---

# Bad Bugcheck

**Author:** NSG650
**Source:** mcp-gamehacking/skills/ags-bad-bugcheck

## Description

This project is an updated kernel BSOD visual hack that renders Bad Apple frames through the crash framebuffer path.
Instead of relying on legacy Bootvid VGA output, it maps and writes to the display framebuffer and hooks KeBugCheckEx to intercept crash flow.
The implementation is mainly C and C++ kernel code and uses stb_image parsing with direct memory copy routines for frame drawing.
It targets Windows internals research focused on bugcheck hooking, display ownership, and crash-screen rendering behavior.
