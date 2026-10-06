---
name: ags-win32k-hooker
description: "Win32kHooker is a Windows kernel driver that demonstrates how to locate and hook function dispatch paths inside win32k.sys on modern systems. The code uses C++ with kernel APIs, process context attach"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-win32k-hooker
---

# Win32kHooker

**Author:** GetRektBoy724
**Source:** mcp-gamehacking/skills/ags-win32k-hooker

## Description

Win32kHooker is a Windows kernel driver that demonstrates how to locate and hook function dispatch paths inside win32k.sys on modern systems. The code uses C++ with kernel APIs, process context attachment, syscall mapping, and runtime disassembly to resolve hook targets in session space. It addresses architectural changes where key pointers are stored in opaque session-state structures instead of simple global data sections. Its primary use case is advanced kernel graphics subsystem research for anti-cheat, defensive engineering, and reverse engineering experiments.
