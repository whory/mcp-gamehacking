---
name: ags-trace-cleaner
description: "This project is a minimal kernel driver example for removing common driver trace artifacts. It focuses on clearing entries from MmUnloadedDrivers and PiDDBCacheTable, which are frequently examined in "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-trace-cleaner
---

# TraceCleaner

**Author:** BadPlayer555
**Source:** mcp-gamehacking/skills/ags-trace-cleaner

## Description

This project is a minimal kernel driver example for removing common driver trace artifacts. It focuses on clearing entries from MmUnloadedDrivers and PiDDBCacheTable, which are frequently examined in forensic and anti-cheat contexts. The code is written in C++ for Windows kernel environments and is intended to be executed through manual mapping workflows. The primary use case is educational research on kernel trace hygiene and anti-cheat detection surfaces.
