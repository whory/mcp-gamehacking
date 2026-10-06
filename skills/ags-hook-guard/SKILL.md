---
name: ags-hook-guard
description: "This project is a Windows kernel research driver that uses a global exception-hook chain to monitor and obfuscate process address-space switching."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hook-guard
---

# HookGuard

**Author:** SamuelTulach
**Source:** mcp-gamehacking/skills/ags-hook-guard

## Description

This project is a Windows kernel research driver that uses a global exception-hook chain to monitor and obfuscate process address-space switching.
It is implemented mainly in C with low-level kernel internals work around CR3 handling, exception dispatch flow, and debugger-related paths while aiming to remain PatchGuard-aware and HVCI-compatible.
The technique logs attempted switches into a protected process context and demonstrates defensive concepts inspired by anti-cheat designs.
It targets kernel anti-cheat research and advanced studies of memory access control at context-switch time.
