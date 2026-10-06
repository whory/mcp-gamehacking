---
name: ags-bedaisy-reversal
description: "A comprehensive reverse engineering of the BEDaisy.sys kernel driver documenting BattlEye's kernel-level anti-cheat checks including integrity validation, callback enumeration, HAL table verification,"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bedaisy-reversal
---

# bedaisy reversal

**Author:** dllcrt0
**Source:** mcp-gamehacking/skills/ags-bedaisy-reversal

## Description

A comprehensive reverse engineering of the BEDaisy.sys kernel driver documenting BattlEye's kernel-level anti-cheat checks including integrity validation, callback enumeration, HAL table verification, and manual-mapped driver detection.
It covers object handle protection, filesystem filter checks, physical memory scanning, CSRSS integrity validation, graphics component verification, and thread/image notification callbacks.
It is mainly useful for anti-cheat researchers studying BattlEye's kernel driver architecture and the full scope of its detection and reporting mechanisms.
