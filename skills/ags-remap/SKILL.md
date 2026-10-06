---
name: ags-remap
description: "This project is a Windows kernel remapping proof of concept that copies pages from a protected process into another process address space. It is implemented in C++ and demonstrates how this approach c"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-remap
---

# Remap

**Author:** EBalloon
**Source:** mcp-gamehacking/skills/ags-remap

## Description

This project is a Windows kernel remapping proof of concept that copies pages from a protected process into another process address space. It is implemented in C++ and demonstrates how this approach can enable memory read/write and dumping workflows after setup. The repository includes notes about supported Windows 10 ranges, operational caveats, and crash-risk warnings when cleanup is handled incorrectly. It is mainly used in anti-cheat bypass and low-level process-memory research scenarios.
