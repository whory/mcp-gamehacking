---
name: ags-cfgdump
description: "cfgdump is a WinDbg extension for inspecting Control Flow Guard coverage in a process address space."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cfgdump
---

# cfgdump

**Author:** JKornev
**Source:** mcp-gamehacking/skills/ags-cfgdump

## Description

cfgdump is a WinDbg extension for inspecting Control Flow Guard coverage in a process address space.
Implemented in C++, it provides commands to print CFG maps, query specific ranges, and list protected regions.
The extension helps analysts understand which memory areas are guarded by CFG bits and how those protections are laid out.
It is useful for exploit development research, binary hardening validation, and low-level Windows debugging workflows.
