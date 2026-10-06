---
name: ags-win-dbg-extensions
description: "This project is a WinDbg extension that enumerates kernel callback registrations on a Windows system."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-win-dbg-extensions
---

# WinDbg Extensions

**Author:** ch3rn0byl
**Source:** mcp-gamehacking/skills/ags-win-dbg-extensions

## Description

This project is a WinDbg extension that enumerates kernel callback registrations on a Windows system.
It queries PspCreateProcessNotifyRoutine, PspCreateThreadNotifyRoutine, and PspLoadImageNotifyRoutine to list all registered process, thread, and image load callback pointers with their associated driver modules.
The extension accepts parameters for filtering by callback type (process, image, thread, or all) for convenient inspection during kernel debugging sessions.
It is mainly useful for anti-cheat researchers and kernel debuggers inspecting registered callback routines for rootkit detection and driver analysis.
