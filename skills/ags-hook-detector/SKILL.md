---
name: ags-hook-detector
description: "Hook Detector is a Windows desktop application that scans loaded modules and processes to identify function and API hooks. It is built in C++20 with a DirectX 11 and ImGui graphical interface, and its"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hook-detector
---

# Hook Detector

**Author:** 0x6461726B
**Source:** mcp-gamehacking/skills/ags-hook-detector

## Description

Hook Detector is a Windows desktop application that scans loaded modules and processes to identify function and API hooks. It is built in C++20 with a DirectX 11 and ImGui graphical interface, and its core logic combines a module scanner with PE parsing utilities to compare in-memory code against expected executable layouts. The project targets both x86 and x64 Windows builds and is intended for anti-cheat developers, game security researchers, and reverse engineers who need to inspect hook-based tampering in running software.
