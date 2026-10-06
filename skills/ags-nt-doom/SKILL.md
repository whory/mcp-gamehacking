---
name: ags-nt-doom
description: "This project is a Windows kernel port that runs DOOM from a kernel driver context."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nt-doom
---

# NtDOOM

**Author:** NSG650
**Source:** mcp-gamehacking/skills/ags-nt-doom

## Description

This project is a Windows kernel port that runs DOOM from a kernel driver context.
It uses win32k-side syscall handling, thread context spoofing, and kernel-side graphics and input interactions to execute gameplay logic.
The implementation is primarily C and C++ driver code with substantial NT internals work and an adapted PureDOOM base.
It serves as a research demo for extreme kernel GUI and syscall experimentation rather than practical game development.
