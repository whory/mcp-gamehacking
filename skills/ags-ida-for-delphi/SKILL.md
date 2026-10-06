---
name: ags-ida-for-delphi
description: "This project is an IDAPython script that helps recover Delphi function names from event constructor patterns during reverse engineering."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-for-delphi
---

# IDA For Delphi

**Author:** Coldzer0
**Source:** mcp-gamehacking/skills/ags-ida-for-delphi

## Description

This project is an IDAPython script that helps recover Delphi function names from event constructor patterns during reverse engineering.
It is written in Python for IDA Pro and includes support for 64-bit targets.
The workflow is focused on loading the script in a live debugging session so symbols can be resolved from runtime context.
It is mainly used by analysts working on Delphi binaries in malware analysis or software reversing tasks.
