---
name: ags-hardware-breakpoint
description: "hardware-breakpoint is a Linux kernel project for ARM64 that implements configurable hardware breakpoints through exported APIs and proc interfaces."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hardware-breakpoint
---

# hardware breakpoint

**Author:** Ylarod
**Source:** mcp-gamehacking/skills/ags-hardware-breakpoint

## Description

hardware-breakpoint is a Linux kernel project for ARM64 that implements configurable hardware breakpoints through exported APIs and proc interfaces.
It supports adding and removing execution or watch breakpoints by symbol or address, listing active breakpoints, and collecting trigger statistics.
The project also provides utilities to resolve symbol values and map physical IO addresses to related virtual mappings.
Its primary use case is kernel-level debugging and security research on Android or embedded systems that require fine-grained runtime monitoring.
