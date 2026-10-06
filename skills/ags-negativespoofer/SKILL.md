---
name: ags-negativespoofer
description: "negativespoofer is a boot-time SMBIOS spoofing project that modifies firmware tables before the operating system starts."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-negativespoofer
---

# negativespoofer

**Author:** SamuelTulach
**Source:** mcp-gamehacking/skills/ags-negativespoofer

## Description

negativespoofer is a boot-time SMBIOS spoofing project that modifies firmware tables before the operating system starts.
Its implementation follows a Clover-style patching approach and includes C and EFI-oriented code plus separate build and usage guidance.
By changing SMBIOS data pre-boot, it targets hardware identity signals that are often consumed later by system and security software.
The repository serves as a historical resource for pre-OS hardware fingerprint manipulation research in anti-cheat and platform security contexts.
