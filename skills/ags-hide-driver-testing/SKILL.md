---
name: ags-hide-driver-testing
description: "A kernel driver hiding implementation that removes traces from MmUnloadedDrivers, PsLoadedModuleList, PiDDBCacheTable, and driver object lists."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hide-driver-testing
---

# HideDriverTesting

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-hide-driver-testing

## Description

A kernel driver hiding implementation that removes traces from MmUnloadedDrivers, PsLoadedModuleList, PiDDBCacheTable, and driver object lists.
Designed for Windows 11 21H2 stress testing, erases driver loading artifacts from multiple kernel data structures used by anti-rootkit tools for detection.
