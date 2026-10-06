---
name: ags-auto-aim
description: "This project is a real-time AI aiming assistant core that combines screen capture, object detection, and automated mouse control. It is written in C++ and uses DXGI Desktop Duplication for low-latency"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-auto-aim
---

# Auto aim

**Author:** Fragmentaim
**Source:** mcp-gamehacking/skills/ags-auto-aim

## Description

This project is a real-time AI aiming assistant core that combines screen capture, object detection, and automated mouse control. It is written in C++ and uses DXGI Desktop Duplication for low-latency capture, ONNX Runtime with TensorRT for YOLO inference, and OpenCV for vision processing. The input layer is built around a driver-level mouse simulation interface to convert detections into relative cursor movement. Its primary use case is technical research into real-time computer vision driven game automation.
