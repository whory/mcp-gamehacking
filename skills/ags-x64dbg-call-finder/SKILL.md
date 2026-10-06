---
name: ags-x64dbg-call-finder
description: "x64dbgCallFinder is an x64dbg plugin that helps locate important runtime functions by tracking how often they are called."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-x64dbg-call-finder
---

# x64dbgCallFinder

**Author:** Kwansy98
**Source:** mcp-gamehacking/skills/ags-x64dbg-call-finder

## Description

x64dbgCallFinder is an x64dbg plugin that helps locate important runtime functions by tracking how often they are called.
It scans user functions, places conditional breakpoints, and increments counters so analysts can filter results by call count after triggering in-application actions.
The project is implemented in C++ for the x64dbg plugin environment and includes bilingual usage documentation.
It is useful for reverse engineering and game security workflows where you need to identify handlers such as UI callbacks or gameplay logic quickly.
