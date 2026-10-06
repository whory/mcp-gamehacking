---
name: ags-kernel-anticheat
description: "This project is a Windows kernel anti-cheat prototype driver that scans a system for suspicious cheating indicators."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-anticheat
---

# Kernel Anticheat

**Author:** Vasieco
**Source:** mcp-gamehacking/skills/ags-kernel-anticheat

## Description

This project is a Windows kernel anti-cheat prototype driver that scans a system for suspicious cheating indicators.
It is written in C/C++ with Visual Studio driver projects and focuses on low-level host integrity checks.
Its checks cover unsigned or abnormal drivers, physical memory handle abuse, hypervisor traces, big pool artifacts, mapper traces, and suspicious system threads.
The code is aimed at anti-cheat research and experimentation with kernel-mode detection techniques.
