---
name: ags-armcall
description: "Armcall is a header-only C++20 library for making direct Windows kernel syscalls on ARM64. It parses ntdll exports, extracts the immediate operand from each SVC instruction, and dynamically generates "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-armcall
---

# armcall

**Author:** noahware
**Source:** mcp-gamehacking/skills/ags-armcall

## Description

Armcall is a header-only C++20 library for making direct Windows kernel syscalls on ARM64. It parses ntdll exports, extracts the immediate operand from each SVC instruction, and dynamically generates executable stubs that invoke svc and return without routing calls through import thunks that anti-cheat or EDR software may hook. The AC_SYSCALL macros provide a simple interface for invoking NT functions such as memory allocation and system time queries, with pluggable standard library abstractions for custom environments. It is useful for game security research, anti-cheat evasion studies, and low-level Windows reverse engineering on ARM64 platforms.
