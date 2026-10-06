---
name: ags-vac-bypass-kernel
description: "This project focuses on fully working kernel-mode VAC bypass."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vac-bypass-kernel
---

# vac bypass kernel

**Author:** crvvdev
**Source:** mcp-gamehacking/skills/ags-vac-bypass-kernel

## Description

This project focuses on fully working kernel-mode VAC bypass.
Basically the anti-cheat is fully external, meaning that it makes use of syscalls like NtReadVirtualMemory in order to read game memory and perform some checks.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / explore anticheat system:vac area.
