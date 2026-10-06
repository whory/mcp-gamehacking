---
name: ags-exp-life0011-hide-driver
description: "This project is a Windows kernel driver-hiding proof of concept for x64 systems. It uses ETW-related symbol discovery to locate MiProcessLoaderEntry and removes DriverObject->DriverSection in a PatchG"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-exp-life0011-hide-driver
---

# HideDriver

**Author:** ExpLife0011
**Source:** mcp-gamehacking/skills/ags-exp-life0011-hide-driver

## Description

This project is a Windows kernel driver-hiding proof of concept for x64 systems. It uses ETW-related symbol discovery to locate MiProcessLoaderEntry and removes DriverObject->DriverSection in a PatchGuard-aware way. The code also erases driver-identifying artifacts after load by running cleanup logic in a separate thread. Its primary use case is anti-cheat evasion research and low-level study of driver forensic footprints.
