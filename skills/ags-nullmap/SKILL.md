---
name: ags-nullmap
description: "This project is nullmap, a Windows driver mapper that erases traces of the mapped driver after execution. It manually maps an unsigned driver, runs its entry point, then cleans up by zeroing headers, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nullmap
---

# nullmap

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-nullmap

## Description

This project is nullmap, a Windows driver mapper that erases traces of the mapped driver after execution. It manually maps an unsigned driver, runs its entry point, then cleans up by zeroing headers, removing pool allocations, and unlinking references, leaving minimal forensic evidence of the mapped driver. It is aimed at kernel researchers studying anti-forensic driver mapping techniques.
