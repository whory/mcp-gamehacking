---
name: ags-valthrun-uefi-mapper
description: "This project is a UEFI-based mapper that loads a game driver during boot."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-valthrun-uefi-mapper
---

# valthrun uefi mapper

**Author:** Valthrun
**Source:** mcp-gamehacking/skills/ags-valthrun-uefi-mapper

## Description

This project is a UEFI-based mapper that loads a game driver during boot.
It is written in Rust for the x86_64 UEFI target and includes scripts to build bootable ISO images for USB deployment.
The loader can start before normal operating-system drivers, which is useful for early-stage driver initialization experiments.
Its primary use case is research into boot-time driver loading and stealth-oriented Windows security workflows.
