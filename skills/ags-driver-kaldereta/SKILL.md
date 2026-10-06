---
name: ags-driver-kaldereta
description: "This project is an unsigned kernel driver paired with a user-mode sample that exposes a broad memory-manipulation and input-simulation feature set through a custom communication hook."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-kaldereta
---

# Driver kaldereta

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-kaldereta

## Description

This project is an unsigned kernel driver paired with a user-mode sample that exposes a broad memory-manipulation and input-simulation feature set through a custom communication hook.
The archived README lists process lookup, module-base discovery, virtual memory allocation and protection changes, read and write primitives, input simulation, pattern scanning, and even manual DLL mapping, while the sample wrapper sends `KALDERETA_MEMORY` requests through a hooked Win32 call path instead of a conventional public device interface.
Its structure makes the repository useful as both a feature-rich cheat-driver skeleton and a reference for pairing kernel memory operations with a higher-level user-mode helper library.
It is mainly useful for Windows kernel and reverse-engineering researchers studying driver communication hooks, memory tooling primitives, and integrated user/kernel manual-mapping workflows.
