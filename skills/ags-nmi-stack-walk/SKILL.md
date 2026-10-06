---
name: ags-nmi-stack-walk
description: "This project is a Windows kernel proof of concept for detecting hidden no-module drivers with NMI-based stack walking."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nmi-stack-walk
---

# NMIStackWalk

**Author:** 1401199262
**Source:** mcp-gamehacking/skills/ags-nmi-stack-walk

## Description

This project is a Windows kernel proof of concept for detecting hidden no-module drivers with NMI-based stack walking.
It sends non-maskable interrupts to selected CPUs and performs stack backtraces inside an NMI callback to inspect suspicious execution paths.
The implementation is in C with a standard Visual Studio kernel-driver project layout.
Its primary use case is anti-rootkit and anti-cheat style detection research at kernel level.
