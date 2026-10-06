---
name: ags-gh-offset-dumper
description: "This project is GH Offset Dumper, a Windows tool for automatically dumping game structure offsets and interface pointers from running game processes. It uses pattern scanning (signature scanning) to l"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-gh-offset-dumper
---

# GH Offset Dumper

**Author:** guided-hacking
**Source:** mcp-gamehacking/skills/ags-gh-offset-dumper

## Description

This project is GH Offset Dumper, a Windows tool for automatically dumping game structure offsets and interface pointers from running game processes. It uses pattern scanning (signature scanning) to locate game-specific data structures, entity lists, client/engine interfaces, and netvars in memory, outputting the results as header files or JSON. The C++ tool is commonly used with Source engine games. It is aimed at game hackers and modders who need to automatically update memory offsets after game patches.
