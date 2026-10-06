---
name: ags-shirakumo
description: "This project is a proof-of-concept RPM/WPM proxy that forwards memory operations through named pipes. It is written in C++ and separates read/write execution into another process, with optional DLL lo"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-shirakumo
---

# Shirakumo

**Author:** M3351AN
**Source:** mcp-gamehacking/skills/ags-shirakumo

## Description

This project is a proof-of-concept RPM/WPM proxy that forwards memory operations through named pipes. It is written in C++ and separates read/write execution into another process, with optional DLL loading for proxy deployment. The implementation is explicitly experimental, with noted limitations such as x64-only support and lack of thread safety. It is mainly used to study process-separated memory access patterns for game tooling and evasion research.
