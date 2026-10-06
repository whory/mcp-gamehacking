---
name: ags-yol-ov8-overlay-cs2
description: "This project is a Python-based real-time CS2 overlay that detects enemy players with a YOLOv8 ONNX model."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-yol-ov8-overlay-cs2
---

# YOLOv8 Overlay CS2

**Author:** Leksa667
**Source:** mcp-gamehacking/skills/ags-yol-ov8-overlay-cs2

## Description

This project is a Python-based real-time CS2 overlay that detects enemy players with a YOLOv8 ONNX model.
It uses ONNX Runtime for inference, mss for screen capture, and Pygame plus Win32 APIs to render a transparent topmost overlay window.
The implementation includes optional CUDA acceleration, confidence filtering, hotkeys, and a smooth aim-assist routine.
Its primary use case is computer-vision cheat prototyping and related anti-cheat research on AI-assisted detection behavior.
