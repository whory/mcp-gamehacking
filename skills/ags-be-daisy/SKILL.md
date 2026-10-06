---
name: ags-be-daisy
description: "This project is a reverse engineering proof of concept focused on BattlEye's bedaisy.sys kernel anti-cheat driver. It is written in C++ and demonstrates interception techniques using image load callba"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-be-daisy
---

# BEDaisy

**Author:** Aki2k
**Source:** mcp-gamehacking/skills/ags-be-daisy

## Description

This project is a reverse engineering proof of concept focused on BattlEye's bedaisy.sys kernel anti-cheat driver. It is written in C++ and demonstrates interception techniques using image load callbacks and IAT hooking around MmGetSystemRoutineAddress. The code discusses taking control over subsequent anti-cheat execution paths and includes APC-related experimentation. It is intended for researchers studying kernel anti-cheat behavior, bypass surfaces, and defensive hardening opportunities.
