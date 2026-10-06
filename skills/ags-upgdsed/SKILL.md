---
name: ags-upgdsed
description: "This project is UPGDSED (Universal PatchGuard and DSE Disable), a Windows tool for disabling PatchGuard (Kernel Patch Protection) and Driver Signature Enforcement (DSE) at runtime. It uses multiple te"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-upgdsed
---

# UPGDSED

**Author:** hfiref0x
**Source:** mcp-gamehacking/skills/ags-upgdsed

## Description

This project is UPGDSED (Universal PatchGuard and DSE Disable), a Windows tool for disabling PatchGuard (Kernel Patch Protection) and Driver Signature Enforcement (DSE) at runtime. It uses multiple techniques including exploiting vulnerable signed drivers, manipulating CI.dll globals, and patching KPP context data to allow loading of unsigned kernel drivers and modifying protected kernel structures. The C codebase targets multiple Windows versions from 7 through 11. It is aimed at kernel researchers studying PatchGuard internals, DSE bypass methods, and Windows kernel security mechanisms.
