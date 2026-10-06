---
name: ags-easy-hwid-spoofer
description: "A kernel-mode hardware ID spoofer that modifies disk, NIC, GPU, and SMBIOS serial identifiers."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-easy-hwid-spoofer
---

# EASY HWID SPOOFER

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-easy-hwid-spoofer

## Description

A kernel-mode hardware ID spoofer that modifies disk, NIC, GPU, and SMBIOS serial identifiers.
Works by hooking driver dispatch functions and directly patching physical memory to alter hardware fingerprints reported to anti-cheat systems, tested on Windows 10.
