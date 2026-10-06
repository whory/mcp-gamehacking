---
name: ags-ida-enums-helper
description: "IDA Pro plugin that streamlines enum management in the Hex-Rays pseudocode view, providing hotkey-driven actions to rename enum members (N), add values to existing or new enums (A), and quickly append"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-enums-helper
---

# ida enums helper

**Author:** milankovo
**Source:** mcp-gamehacking/skills/ags-ida-enums-helper

## Description

IDA Pro plugin that streamlines enum management in the Hex-Rays pseudocode view, providing hotkey-driven actions to rename enum members (N), add values to existing or new enums (A), and quickly append to the last-used enum (Shift-A). Uses idaapi.tinfo_t ordinal iteration and chooser dialogs to match numeric operands against existing enum definitions.
