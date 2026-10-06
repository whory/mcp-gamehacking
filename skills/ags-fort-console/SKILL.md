---
name: ags-fort-console
description: "This project is a DLL that re-enables an Unreal Engine in-game console interface in a specific Fortnite build context."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-fort-console
---

# FortConsole

**Author:** Makk5
**Source:** mcp-gamehacking/skills/ags-fort-console

## Description

This project is a DLL that re-enables an Unreal Engine in-game console interface in a specific Fortnite build context.
It is written in C++ for x64 Windows and uses pattern scanning and engine object construction logic to locate and initialize console-related structures at runtime.
The repository includes low-level Unreal object enums and memory helpers to support internal injection workflows.
Its primary use case is Unreal Engine internals exploration and game security research in controlled, anti-cheat-disabled environments.
