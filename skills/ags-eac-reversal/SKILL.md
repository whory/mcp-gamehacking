---
name: ags-eac-reversal
description: "This project is a collection of reversed EasyAntiCheat (EAC) driver internals including decompiled callback checks, driver validation routines, and anti-cheat detection logic."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eac-reversal
---

# EAC Reversal

**Author:** ch4ncellor
**Source:** mcp-gamehacking/skills/ags-eac-reversal

## Description

This project is a collection of reversed EasyAntiCheat (EAC) driver internals including decompiled callback checks, driver validation routines, and anti-cheat detection logic.
It documents EAC's driver dispatch verification, callback enumeration, certificate validation, and code integrity checking through reversed C++ pseudocode from the devirtualized EAC binary.
The reversal builds on previous work including VMP2 devirtualization and community-shared EAC analysis, serving as an updated reference for EAC's kernel-mode protections.
It is mainly useful for anti-cheat researchers and reverse engineers studying EasyAntiCheat's kernel-level detection mechanisms and driver validation strategies.
