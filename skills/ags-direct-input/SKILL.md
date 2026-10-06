---
name: ags-direct-input
description: "DirectInput is a Windows C++ project that simulates keyboard and mouse input by calling class service routines instead of relying on standard SendInput APIs. It includes both a kernel-mode driver and "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-direct-input
---

# DirectInput

**Author:** adspro15
**Source:** mcp-gamehacking/skills/ags-direct-input

## Description

DirectInput is a Windows C++ project that simulates keyboard and mouse input by calling class service routines instead of relying on standard SendInput APIs. It includes both a kernel-mode driver and a user-mode companion module, built with Visual Studio and the Windows Driver Kit. The implementation shows how to discover keyboard and mouse class stacks, capture service callbacks, and inject input data through low-level driver paths. This makes it useful for low-level input pipeline research in contexts such as game automation and anti-cheat behavior analysis.
