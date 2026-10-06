---
name: ags-read-phys
description: "This project is a method to read physical memory by manually mapping PTE without using any r/w API (like MmCopyMemory/MmMapIoSpace...) Reversed from AXE-BASE.sys."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-read-phys
---

# ReadPhys

**Author:** rogxo
**Source:** mcp-gamehacking/skills/ags-read-phys

## Description

This project is a method to read physical memory by manually mapping PTE without using any r/w API (like MmCopyMemory/MmMapIoSpace...) Reversed from AXE-BASE.sys.
It is primarily written in C++ and C/C++ and centers on memory analysis.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / explore anticheat system:ace area.
