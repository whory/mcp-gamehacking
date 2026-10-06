---
name: ags-ue4-c
description: "External Unreal Engine 4 cheat targeting Valorant, split into a kernel-mode driver (manual-mapped via EFI) that communicates through IOCTL dispatch hooks, and a usermode client that reads game memory "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ue4-c
---

# UE4 c 

**Author:** frankelitoc
**Source:** mcp-gamehacking/skills/ags-ue4-c

## Description

External Unreal Engine 4 cheat targeting Valorant, split into a kernel-mode driver (manual-mapped via EFI) that communicates through IOCTL dispatch hooks, and a usermode client that reads game memory through the driver interface. The client renders an ImGui overlay on a DirectX 9 window, using ToolHelp32 snapshots for process enumeration and the driver for cross-process memory reads of UE4 actor and player structures.
