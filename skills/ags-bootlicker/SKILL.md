---
name: ags-bootlicker
description: "This project is bootlicker, a UEFI bootkit proof of concept that loads malicious code during the Windows boot process before the OS kernel initializes. It patches the Windows Boot Manager or OS loader"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bootlicker
---

# bootlicker

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-bootlicker

## Description

This project is bootlicker, a UEFI bootkit proof of concept that loads malicious code during the Windows boot process before the OS kernel initializes. It patches the Windows Boot Manager or OS loader to inject kernel-mode code that executes with full system privileges, bypassing DSE, PatchGuard, and all OS-level security measures. It is aimed at boot security researchers studying UEFI bootkit techniques and Secure Boot bypass.
