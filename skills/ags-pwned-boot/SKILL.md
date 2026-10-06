---
name: ags-pwned-boot
description: "PwnedBoot is a proof-of-concept boot payload that replaces the Windows microcode update DLL to run custom code very early in the boot chain."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pwned-boot
---

# PwnedBoot

**Author:** SamuelTulach
**Source:** mcp-gamehacking/skills/ags-pwned-boot

## Description

PwnedBoot is a proof-of-concept boot payload that replaces the Windows microcode update DLL to run custom code very early in the boot chain.
The project is implemented in C and C++ with EFI-focused code, Visual Studio project files, and bundled gnu-efi components.
Its core technique demonstrates how the bootloader can execute the replacement module under specific boot options and then remap execution to continue boot flow.
It is mainly useful for boot security research, early-boot attack surface analysis, and anti-cheat threat modeling around pre-OS execution.
