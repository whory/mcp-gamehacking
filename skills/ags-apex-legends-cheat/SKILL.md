---
name: ags-apex-legends-cheat
description: "This project is an external Windows cheat architecture for a battle royale title that uses a kernel driver, loader, and client DLL components."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-apex-legends-cheat
---

# apex legends cheat

**Author:** NMan1
**Source:** mcp-gamehacking/skills/ags-apex-legends-cheat

## Description

This project is an external Windows cheat architecture for a battle royale title that uses a kernel driver, loader, and client DLL components.
It is implemented in C++ with separate projects for driver-side logic, user-mode loading, and feature modules.
The code includes ESP and chams-style visuals, input-assisted aiming utilities, and a bypass approach centered on syscall hooking and kernel-thread execution.
Its primary use case is reverse engineering and anti-cheat research into kernel-mediated cheat pipelines.
