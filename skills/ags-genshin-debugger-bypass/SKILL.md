---
name: ags-genshin-debugger-bypass
description: "A DLL-based bypass for Genshin Impact's anti-debugging protections that hooks critical Windows APIs using Microsoft Detours (detours-x64.lib) to neutralize mhyprot2.sys kernel driver checks and allow "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-genshin-debugger-bypass
---

# GenshinDebuggerBypass

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-genshin-debugger-bypass

## Description

A DLL-based bypass for Genshin Impact's anti-debugging protections that hooks critical Windows APIs using Microsoft Detours (detours-x64.lib) to neutralize mhyprot2.sys kernel driver checks and allow attaching a debugger to the game process.
The project includes a CloseMhyprot2 module that terminates or unloads the mhyprot2 anti-cheat kernel driver, combined with API hooks in DebuggerBypass.cpp that intercept NtQueryInformationProcess, IsDebuggerPresent, and related anti-debug calls to hide debugger presence from the game's integrity checks.
It is mainly useful for game security researchers studying anti-debug bypass techniques against miHoYo/HoYoverse's mhyprot2 kernel-level protection system.
