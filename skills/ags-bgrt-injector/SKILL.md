---
name: ags-bgrt-injector
description: "BGRTInjector is a UEFI utility that replaces the boot logo shown by systems using the ACPI BGRT mechanism."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bgrt-injector
---

# BGRTInjector

**Author:** Jamesits
**Source:** mcp-gamehacking/skills/ags-bgrt-injector

## Description

BGRTInjector is a UEFI utility that replaces the boot logo shown by systems using the ACPI BGRT mechanism.
It is written in C and designed to run as an EFI loader or driver, with support for custom 24-bit BMP assets.
The project includes build assets and integration notes for common boot workflows such as rEFInd and default EFI paths.
Its main use case is low-level firmware customization and boot-chain experimentation on Windows-capable UEFI machines.
