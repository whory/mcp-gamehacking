---
name: ags-hotkeybased-keylogger-detector
description: "Hotkey-based Keylogger Detector is a Windows kernel driver that detects keyloggers abusing global hotkey registration. It scans win32kfull internals to resolve the global hotkey table and inspects reg"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hotkeybased-keylogger-detector
---

# HotkeybasedKeyloggerDetector

**Author:** AsuNa-jp
**Source:** mcp-gamehacking/skills/ags-hotkeybased-keylogger-detector

## Description

Hotkey-based Keylogger Detector is a Windows kernel driver that detects keyloggers abusing global hotkey registration. It scans win32kfull internals to resolve the global hotkey table and inspects registered entries for suspicious usage patterns. The implementation is written in C++ as a KMDF driver with installation and debugging guidance for test environments. This project is intended for defensive endpoint research and Windows security testing.
