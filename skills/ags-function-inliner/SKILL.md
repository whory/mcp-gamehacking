---
name: ags-function-inliner
description: "This project is an IDA Pro plugin that reverses function outlining optimization (e.g., clang --moutline) by inlining outlined functions back into their callers."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-function-inliner
---

# FunctionInliner

**Author:** cellebrite-labs
**Source:** mcp-gamehacking/skills/ags-function-inliner

## Description

This project is an IDA Pro plugin that reverses function outlining optimization (e.g., clang --moutline) by inlining outlined functions back into their callers.
It creates clones of outlined functions per caller, replaces BL instructions with direct branches to the clone, and converts clone RET instructions to branches back to the caller, adding each clone as a function chunk.
The plugin supports both manual context-menu-based inlining and heuristic identification of all outlined functions for batch processing.
It is mainly useful for reverse engineers analyzing space-optimized ARM binaries where function outlining breaks Hex-Rays decompilation and static analysis workflows.
