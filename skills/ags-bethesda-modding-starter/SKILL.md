---
name: ags-bethesda-modding-starter
description: "A one-stop bootstrap environment for developing Bethesda script-extender plugins and performing engine-level reverse engineering on Fallout 4, Skyrim, and Starfield. It ships idempotent PowerShell set"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bethesda-modding-starter
---

# bethesda modding starter

**Author:** rollingrock
**Source:** mcp-gamehacking/skills/ags-bethesda-modding-starter

## Description

A one-stop bootstrap environment for developing Bethesda script-extender plugins and performing engine-level reverse engineering on Fallout 4, Skyrim, and Starfield. It ships idempotent PowerShell setup scripts, a plugin scaffolder with CMake and vcpkg templates, and integrated Ghidra and x64dbg workflows bridged via MCP for AI-assisted decompilation and live debugging. The pack includes C++ F4SE and SFSE plugin templates wired to CommonLib, address-library import tooling, and devbench for in-game memory and render-target instrumentation over localhost. Primary languages are C++ for plugin code, PowerShell for automation, and Python for Ghidra scripts. It is aimed at mod developers and reverse engineers who need a reproducible Windows toolchain for building, analyzing, and debugging Bethesda game binaries.
