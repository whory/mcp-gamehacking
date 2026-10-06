---
name: ags-kdp-compatible-driver-loader
description: "A kernel unsigned driver loader compatible with Kernel Data Protection (KDP) on Windows 10."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kdp-compatible-driver-loader
---

# KDP compatible driver loader

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-kdp-compatible-driver-loader

## Description

A kernel unsigned driver loader compatible with Kernel Data Protection (KDP) on Windows 10.
Leverages gdrv.sys write primitives to bypass Driver Signature Enforcement by patching SeCiCallbacks, which is initialized by CiInitialize and used by SeValidateImageHeader to call CiValidateImageHeader.
