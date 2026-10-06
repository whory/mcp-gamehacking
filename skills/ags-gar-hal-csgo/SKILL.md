---
name: ags-gar-hal-csgo
description: "A CS:GO kernel-mode cheat driver with a companion usermode controller that demonstrates game manipulation from kernel space via IOCTL communication."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-gar-hal-csgo
---

# GarHal CSGO

**Author:** dretax
**Source:** mcp-gamehacking/skills/ags-gar-hal-csgo

## Description

A CS:GO kernel-mode cheat driver with a companion usermode controller that demonstrates game manipulation from kernel space via IOCTL communication.
It implements kernel-level memory read/write for game entity data access, with plans for kernel-level DirectX hooking and drawing overlays without usermode injection.
It is mainly useful for game security researchers studying kernel-driver-based cheat architectures and understanding how anti-cheat systems must defend against ring-0 threats.
