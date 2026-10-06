---
name: ags-app-init-hook
description: "AppInitHook is a Windows DLL injection and API hooking framework that uses the AppInit_DLLs registry mechanism to load custom modules into processes at startup. A dispatcher DLL reads an INI configura"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-app-init-hook
---

# AppInitHook

**Author:** mrexodia
**Source:** mcp-gamehacking/skills/ags-app-init-hook

## Description

AppInitHook is a Windows DLL injection and API hooking framework that uses the AppInit_DLLs registry mechanism to load custom modules into processes at startup. A dispatcher DLL reads an INI configuration to decide which process-specific module to load, and a HookDll helper wraps MinHook with macros for hooking exported APIs or process entry points. The project is written in C/C++, built with CMake and cmkr for MSVC, and ships example modules for process control and behavior tweaks. It is aimed at reverse engineers and developers who need early, configurable process injection and hooking on Windows for debugging, research, or game-security related work.
