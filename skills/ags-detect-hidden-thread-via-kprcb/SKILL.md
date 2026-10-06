---
name: ags-detect-hidden-thread-via-kprcb
description: "This project is a Windows kernel proof of concept for detecting hidden threads removed from the process/thread ID table."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-detect-hidden-thread-via-kprcb
---

# Detect HiddenThread via KPRCB

**Author:** KANKOSHEV
**Source:** mcp-gamehacking/skills/ags-detect-hidden-thread-via-kprcb

## Description

This project is a Windows kernel proof of concept for detecting hidden threads removed from the process/thread ID table.
It walks thread information through KPRCB-related structures and verifies thread presence with thread lookup checks.
The implementation is provided as a Visual Studio kernel driver project written in C and C++.
It is useful for anti-cheat integrity monitoring and low-level forensic research.
