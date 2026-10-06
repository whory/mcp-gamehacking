---
name: ags-vac-dumper
description: "This project is a DLL-based VAC3 dumping utility that is injected into steam.exe so it can intercept the routine Steam uses to load VAC modules."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vac-dumper
---

# VACDumper

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-vac-dumper

## Description

This project is a DLL-based VAC3 dumping utility that is injected into steam.exe so it can intercept the routine Steam uses to load VAC modules.
The archived README explains the workflow around starting Steam as administrator, injecting before the game launches, and writing recovered modules to C:\Modules for offline analysis.
The code locates the steamservice.dll routine responsible for loading VAC modules, hooks it with MinHook, and captures the module content at load time instead of trying to reconstruct it afterward.
It is mainly useful for reverse engineers studying Valve Anti-Cheat module loading, Steam-side interception points, and simple live-dump workflows for VAC analysis.
