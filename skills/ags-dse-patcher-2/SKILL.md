---
name: ags-dse-patcher-2
description: "A tool that patches Driver Signature Enforcement (DSE) in the Windows kernel to allow loading unsigned drivers."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dse-patcher-2
---

# Dse Patcher 2

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-dse-patcher-2

## Description

A tool that patches Driver Signature Enforcement (DSE) in the Windows kernel to allow loading unsigned drivers.
Locates and modifies ci.dll's g_CiOptions variable to disable code integrity validation for kernel-mode driver images.
