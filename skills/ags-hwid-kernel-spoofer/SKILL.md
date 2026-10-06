---
name: ags-hwid-kernel-spoofer
description: "A kernel-mode HWID spoofer that modifies hardware identifiers through driver dispatch hook interception."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hwid-kernel-spoofer
---

# HWID Kernel Spoofer

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-hwid-kernel-spoofer

## Description

A kernel-mode HWID spoofer that modifies hardware identifiers through driver dispatch hook interception.
Spoofs disk serial numbers, MAC addresses, SMBIOS data, and GPU identifiers by hooking IRP_MJ_DEVICE_CONTROL handlers of storage and network drivers.
