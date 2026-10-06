---
name: ags-modded-voyager
description: "This project is a modified Voyager-style UEFI hypervisor loader and payload framework for Intel and AMD systems. It includes separate VM-exit handlers and memory primitives for guest physical and virt"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-modded-voyager
---

# modded voyager

**Author:** NurdAlert
**Source:** mcp-gamehacking/skills/ags-modded-voyager

## Description

This project is a modified Voyager-style UEFI hypervisor loader and payload framework for Intel and AMD systems. It includes separate VM-exit handlers and memory primitives for guest physical and virtual translation, read and write operations, and page table initialization. The codebase also contains UEFI components that hook Windows boot stages such as bootmgfw and winload and patch Hyper-V related paths before OS startup. It is aimed at advanced low-level research into boot-time virtualization, kernel control, and anti-cheat bypass techniques.
