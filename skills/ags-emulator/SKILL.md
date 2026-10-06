---
name: ags-emulator
description: "Debugger-emulator hybrid built on Unicorn Engine and Capstone that loads PE binaries, emulates x86/x64 execution with API hooking, and provides detailed instruction-level logging. Resolves imports via"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-emulator
---

# emulator

**Author:** mojtabafalleh
**Source:** mcp-gamehacking/skills/ags-emulator

## Description

Debugger-emulator hybrid built on Unicorn Engine and Capstone that loads PE binaries, emulates x86/x64 execution with API hooking, and provides detailed instruction-level logging. Resolves imports via dbghelp, maps PE sections into the emulator's address space, and intercepts Windows API calls to simulate OS behavior for analyzing DRM-protected or obfuscated executables.
