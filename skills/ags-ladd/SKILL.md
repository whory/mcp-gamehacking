---
name: ags-ladd
description: "This project is a Linux anti-debugging detection tool implemented in C. It checks multiple indicators including ptrace behavior, LD_PRELOAD tampering, and TracerPid values in /proc/self/status. The de"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ladd
---

# LADD

**Author:** BarakAharoni
**Source:** mcp-gamehacking/skills/ags-ladd

## Description

This project is a Linux anti-debugging detection tool implemented in C. It checks multiple indicators including ptrace behavior, LD_PRELOAD tampering, and TracerPid values in /proc/self/status. The detection logic is designed to execute early and report likely debugging conditions with simple runtime checks. The primary use case is anti-analysis research and defensive hardening experiments for Linux binaries.
