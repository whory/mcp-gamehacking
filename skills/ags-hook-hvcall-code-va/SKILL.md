---
name: ags-hook-hvcall-code-va
description: "This project is a Windows kernel proof of concept that hooks the hypercall code callback used during address-space switching."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hook-hvcall-code-va
---

# HookHvcallCodeVa

**Author:** 1401199262
**Source:** mcp-gamehacking/skills/ags-hook-hvcall-code-va

## Description

This project is a Windows kernel proof of concept that hooks the hypercall code callback used during address-space switching.
It locates internal routines by pattern scanning, installs a custom callback, and adjusts enlightenment-related flags at runtime.
The C++ implementation focuses on low-level CR3 handling and per-processor hypercall page setup logic.
Its primary use case is advanced kernel internals and hypervisor-behavior research in game security contexts.
