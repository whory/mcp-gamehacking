---
name: ags-disable-nmi-callbacks
description: "A kernel driver that disables NMI (Non-Maskable Interrupt) callbacks in the Windows kernel."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-disable-nmi-callbacks
---

# Disable nmi callbacks

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-disable-nmi-callbacks

## Description

A kernel driver that disables NMI (Non-Maskable Interrupt) callbacks in the Windows kernel.
Uses pattern scanning to locate KiNmiInterruptStart-related variables in ntoskrnl.exe and patches processor affinity and NMI state to prevent anti-cheat NMI-based stack walking detections.
