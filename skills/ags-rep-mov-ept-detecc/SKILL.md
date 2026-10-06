---
name: ags-rep-mov-ept-detecc
description: "This project is a Windows C++ proof of concept for detecting EPT-based hooking or access monitoring."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rep-mov-ept-detecc
---

# rep mov ept detecc

**Author:** JustasMasiulis
**Source:** mcp-gamehacking/skills/ags-rep-mov-ept-detecc

## Description

This project is a Windows C++ proof of concept for detecting EPT-based hooking or access monitoring.
It tests how REP MOVS behaves under faults versus uninterrupted execution and uses overwrite patterns as a signal.
The repository includes a compact single-file implementation with executable memory setup and exception handling logic.
It is primarily aimed at anti-cheat and hypervisor detection research.
