---
name: ags-kernel-callback-removal
description: "This project documents and implements an ETW-TI kernel bypass technique that toggles provider state from kernel memory. It explains how to locate relevant Windows kernel structures, discover offsets, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-callback-removal
---

# kernel callback removal

**Author:** V-i-x-x
**Source:** mcp-gamehacking/skills/ags-kernel-callback-removal

## Description

This project documents and implements an ETW-TI kernel bypass technique that toggles provider state from kernel memory. It explains how to locate relevant Windows kernel structures, discover offsets, and modify enable flags using an existing read/write primitive. The repository combines C++ implementation code with detailed WinDbg and IDA-based reverse engineering notes. It is intended for advanced educational research by pentesters and defenders studying EDR bypass methods.
