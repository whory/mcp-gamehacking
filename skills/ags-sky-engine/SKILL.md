---
name: ags-sky-engine
description: "SkyEngine is a World of Warcraft Lua unlocker that targets protected Lua execution restrictions in the client."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-sky-engine
---

# SkyEngine

**Author:** adde88
**Source:** mcp-gamehacking/skills/ags-sky-engine

## Description

SkyEngine is a World of Warcraft Lua unlocker that targets protected Lua execution restrictions in the client.
The implementation is in C++ with Lua-related components and Windows solution files for practical builds.
It works by repeatedly resetting a taint-related state so protected Lua functions can run more reliably.
The project is mainly relevant to WoW scripting research, cheat prototyping, and anti-cheat detection risk studies.
