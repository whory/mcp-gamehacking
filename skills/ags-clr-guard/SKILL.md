---
name: ags-clr-guard
description: "This project is a Windows defense tool that monitors and blocks .NET CLR (Common Language Runtime) assembly loading in processes. It uses DLL hooking through ClrHook to intercept CLR initialization, l"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-clr-guard
---

# ClrGuard

**Author:** endgameinc
**Source:** mcp-gamehacking/skills/ags-clr-guard

## Description

This project is a Windows defense tool that monitors and blocks .NET CLR (Common Language Runtime) assembly loading in processes. It uses DLL hooking through ClrHook to intercept CLR initialization, log PE metadata and hashes of loaded assemblies, and optionally run as a Windows service for persistent monitoring. It is mainly useful for defensive security researchers and blue team operators studying .NET-based attack detection and CLR loading control.
