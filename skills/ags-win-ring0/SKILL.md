---
name: ags-win-ring0
description: "This project is a Windows C++ sample that uses the WinRing0 driver and API to read low-level CPU telemetry, especially core temperatures. It accesses CPUID and MSR data through the bundled user-mode l"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-win-ring0
---

# WinRing0

**Author:** ashleyhung
**Source:** mcp-gamehacking/skills/ags-win-ring0

## Description

This project is a Windows C++ sample that uses the WinRing0 driver and API to read low-level CPU telemetry, especially core temperatures. It accesses CPUID and MSR data through the bundled user-mode library and kernel driver components, then logs results to a local record file. The repository includes headers, binaries, and a simple console program for per-core monitoring under administrator privileges. Its main use case is hardware monitoring and low-level Windows systems programming practice.
