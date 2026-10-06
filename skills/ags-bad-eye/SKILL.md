---
name: ags-bad-eye
description: "This project is the reason this works is two fold, firstly BattlEye assumes that the handle already has this access, secondly BattlEye only uses the handle to get the EPROCESS so they can call MmCopyV"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bad-eye
---

# BadEye

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-bad-eye

## Description

This project is the reason this works is two fold, firstly BattlEye assumes that the handle already has this access, secondly BattlEye only uses the handle to get the EPROCESS so they can call MmCopyVirtualMemory.
It is primarily written in C++ and centers on memory analysis.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / explore anticheat system:be area.
