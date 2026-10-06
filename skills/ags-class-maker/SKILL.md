---
name: ags-class-maker
description: "This project is an IDA Python plugin that automatically reconstructs C++ classes from constructor pseudocode."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-class-maker
---

# ClassMaker

**Author:** Pycatchown
**Source:** mcp-gamehacking/skills/ags-class-maker

## Description

This project is an IDA Python plugin that automatically reconstructs C++ classes from constructor pseudocode.
It traces vtable assignments, creates or updates IDA structs, and applies naming heuristics to class layouts.
The implementation targets 32-bit and 64-bit workflows and is designed around practical reversing rather than full-binary automation.
It is mainly useful for reverse engineers who want to speed up manual class and vtable recovery in game or native binaries.
