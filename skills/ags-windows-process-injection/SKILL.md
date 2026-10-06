---
name: ags-windows-process-injection
description: "A collection of Windows process injection techniques with working examples and supporting research notes. It starts with local and remote shellcode injection fundamentals, then covers dynamic function"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-windows-process-injection
---

# windows process injection

**Author:** toneillcodes
**Source:** mcp-gamehacking/skills/ags-windows-process-injection

## Description

A collection of Windows process injection techniques with working examples and supporting research notes. It starts with local and remote shellcode injection fundamentals, then covers dynamic function resolution, PEB and export-address-table walking, direct and indirect syscalls, module stomping, thread-pool and fiber injection, PPID spoofing, and call-stack spoofing. Most code is written in C and C++ with assembly helpers for syscalls, plus Python utilities for module-stomping research and process profiling. The project targets reverse engineers and offensive security practitioners studying Windows injection tradecraft and EDR evasion, including topics relevant to game-security and anti-cheat research.
