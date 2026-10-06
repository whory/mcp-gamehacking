---
name: ags-hook-hvl-switch-virtual-address-space
description: "A technique for hooking HvlSwitchVirtualAddressSpace to intercept virtual address space switches in the Windows kernel."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hook-hvl-switch-virtual-address-space
---

# Hook HvlSwitchVirtualAddressSpace

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-hook-hvl-switch-virtual-address-space

## Description

A technique for hooking HvlSwitchVirtualAddressSpace to intercept virtual address space switches in the Windows kernel.
Manipulates CR3 register transitions to hide memory pages from process memory scanning by anti-cheat systems during address space context switches.
