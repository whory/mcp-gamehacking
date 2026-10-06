---
name: ags-battleye-vac-eac-kernel-bypass
description: "A Windows kernel driver that bypasses BattlEye, VAC, and EAC anti-cheat systems by hiding processes and providing kernel-level read/write memory access through IOCTL-based communication with a usermod"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-battleye-vac-eac-kernel-bypass
---

# Battleye VAC EAC Kernel Bypass

**Author:** daswareinfach
**Source:** mcp-gamehacking/skills/ags-battleye-vac-eac-kernel-bypass

## Description

A Windows kernel driver that bypasses BattlEye, VAC, and EAC anti-cheat systems by hiding processes and providing kernel-level read/write memory access through IOCTL-based communication with a usermode client.
It uses filesystem and registry filtering along with process monitoring callbacks to conceal its presence from anti-cheat detection mechanisms.
It is mainly useful for game security researchers studying kernel-level anti-cheat bypass techniques and driver-based process hiding methods.
