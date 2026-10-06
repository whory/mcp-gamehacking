---
name: ags-rigel-driver
description: "This project is a Windows kernel driver focused on read/write process memory functionality for low-level tooling. It is written in C++ and exposes routines for module base/export lookup, kernel memory"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rigel-driver
---

# Rigel Driver

**Author:** Lynnette177
**Source:** mcp-gamehacking/skills/ags-rigel-driver

## Description

This project is a Windows kernel driver focused on read/write process memory functionality for low-level tooling. It is written in C++ and exposes routines for module base/export lookup, kernel memory access, and writing to protected memory regions. The notes indicate mapper-based loading and mention dxgkrnl-related hooking context for operation. It is primarily used for game security research into driver-assisted memory access and anti-cheat bypass techniques.
