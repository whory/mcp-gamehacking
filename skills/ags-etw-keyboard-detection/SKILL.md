---
name: ags-etw-keyboard-detection
description: "This project is a proof-of-concept detector for emulated keyboard input on Windows using ETW traces. It monitors USB-related telemetry paths and compares observed events to distinguish physical key pr"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-etw-keyboard-detection
---

# EtwKeyboardDetection

**Author:** Oliver-1-1
**Source:** mcp-gamehacking/skills/ags-etw-keyboard-detection

## Description

This project is a proof-of-concept detector for emulated keyboard input on Windows using ETW traces. It monitors USB-related telemetry paths and compares observed events to distinguish physical key presses from software-generated input. The implementation is in C++ and currently requires manual setup and keyboard-specific tuning. It is aimed at anti-cheat and endpoint security research focused on input integrity.
