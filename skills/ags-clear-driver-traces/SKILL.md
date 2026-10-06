---
name: ags-clear-driver-traces
description: "This project is a Windows kernel driver for removing forensic traces left by loading other drivers. It contains C++ kernel-mode routines that target structures such as MmUnloadedDrivers, PiDDBCacheTab"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-clear-driver-traces
---

# ClearDriverTraces

**Author:** Sentient111
**Source:** mcp-gamehacking/skills/ags-clear-driver-traces

## Description

This project is a Windows kernel driver for removing forensic traces left by loading other drivers. It contains C++ kernel-mode routines that target structures such as MmUnloadedDrivers, PiDDBCacheTable, and code integrity hash caches. The implementation relies on version-specific offsets and low-level kernel data structure manipulation. It is mainly used in anti-cheat and driver forensics research to study what artifacts are created and how detection logic can track them.
