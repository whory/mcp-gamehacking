---
name: ags-eac-kernel-packet-fucker
description: "A kernel-mode bypass that prevents EasyAntiCheat from sending detection packets to its backend servers."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eac-kernel-packet-fucker
---

# EAC Kernel Packet Fucker

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-eac-kernel-packet-fucker

## Description

A kernel-mode bypass that prevents EasyAntiCheat from sending detection packets to its backend servers.
Hijacks EAC's dynamically imported ExAllocatePoolWithTag by modifying a writable section pointer, causing kernel-mode violation reports (size 33096 bytes) to silently fail allocation and be discarded.
