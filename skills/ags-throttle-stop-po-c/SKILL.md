---
name: ags-throttle-stop-po-c
description: "This project is a proof of concept for CVE-2025-7771 in the ThrottleStop driver, showing arbitrary physical memory and I/O port access from user mode. It documents vulnerable IOCTL handlers for memory"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-throttle-stop-po-c
---

# ThrottleStopPoC

**Author:** U65535F
**Source:** mcp-gamehacking/skills/ags-throttle-stop-po-c

## Description

This project is a proof of concept for CVE-2025-7771 in the ThrottleStop driver, showing arbitrary physical memory and I/O port access from user mode. It documents vulnerable IOCTL handlers for memory read/write and port read/write operations. The implementation is written in C and includes helper routines for virtual-to-physical translation and basic EPROCESS-based checks on Windows. It is primarily aimed at Windows kernel security research, vulnerable-driver analysis, and anti-cheat threat modeling.
