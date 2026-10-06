---
name: ags-re-class-net-driver-reader
description: "This project is a ReClass.NET plugin that reads process memory through a kernel driver instead of standard user-mode APIs. It replaces ReadProcessMemory with driver-based memory reading, enabling ReCl"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-re-class-net-driver-reader
---

# ReClass.NET DriverReader

**Author:** niemand-sec
**Source:** mcp-gamehacking/skills/ags-re-class-net-driver-reader

## Description

This project is a ReClass.NET plugin that reads process memory through a kernel driver instead of standard user-mode APIs. It replaces ReadProcessMemory with driver-based memory reading, enabling ReClass.NET to inspect memory of processes protected by anti-cheat systems that block standard memory access. The C#/C++ plugin bridges ReClass.NET with a kernel memory reader. It is aimed at game security researchers using ReClass.NET for memory structure analysis on anti-cheat protected processes.
