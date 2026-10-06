---
name: ags-uptime-faker
description: "This project is a Windows timing hook library that fakes system uptime values for testing and compatibility work."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-uptime-faker
---

# UptimeFaker

**Author:** CookiePLMonster
**Source:** mcp-gamehacking/skills/ags-uptime-faker

## Description

This project is a Windows timing hook library that fakes system uptime values for testing and compatibility work.
It is written in C++ as a Detours-based plugin and can be injected as a DLL or ASI-style module.
The tool can redirect multiple timer-related APIs and applies configurable behavior through an INI file, including process-relative time simulation.
It is primarily used to diagnose or mitigate game and application bugs that appear on high-uptime systems.
