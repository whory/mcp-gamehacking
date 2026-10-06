---
name: ags-eac-emu
description: "This project is a simple x64 EasyAntiCheat emulator stub implemented as a Windows DLL."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eac-emu
---

# EAC Emu

**Author:** Rat431
**Source:** mcp-gamehacking/skills/ags-eac-emu

## Description

This project is a simple x64 EasyAntiCheat emulator stub implemented as a Windows DLL.
It exports a large set of expected anti-cheat API functions and provides placeholder interface implementations to satisfy client calls.
The codebase is primarily C++ with a small assembly helper for low-level patch routines.
It is intended as a proof of concept for reverse engineering and compatibility testing of software that links against EAC components.
