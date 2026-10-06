---
name: ags-and64inline-hook
description: "This project is a lightweight inline hooking library for Android on ARM64. The C++ implementation patches target instructions, relocates affected AArch64 branches, and builds trampolines so original c"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-and64inline-hook
---

# And64InlineHook

**Author:** Rprop
**Source:** mcp-gamehacking/skills/ags-and64inline-hook

## Description

This project is a lightweight inline hooking library for Android on ARM64. The C++ implementation patches target instructions, relocates affected AArch64 branches, and builds trampolines so original code can continue safely after hooks are installed. It also handles low-level runtime details such as executable memory changes and instruction cache flushing. The library is useful for mobile reverse engineering, instrumentation, and game security experimentation on ARMv8 platforms.
