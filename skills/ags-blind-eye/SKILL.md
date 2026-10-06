---
name: ags-blind-eye
description: "This project focuses on packet Fucker."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-blind-eye
---

# BlindEye

**Author:** zouxianyu
**Source:** mcp-gamehacking/skills/ags-blind-eye

## Description

This project focuses on packet Fucker.
By hooking the ExAllocatePool and ExAllocatePoolWithTag functions imported by the BattlEye kernel module, the memory allocation requests of the "report" function are dropped and the kernel detections are bypassed.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / explore anticheat system:be area.
