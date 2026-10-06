---
name: ags-efi-c-make
description: "Minimal CMake template for building UEFI applications using the EDK2 SDK headers without the full EDK2 build system. Produces standalone .efi binaries compiled with MSVC (/GS- /EHs-) and linked with /"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-efi-c-make
---

# EfiCMake

**Author:** mrexodia
**Source:** mcp-gamehacking/skills/ags-efi-c-make

## Description

Minimal CMake template for building UEFI applications using the EDK2 SDK headers without the full EDK2 build system. Produces standalone .efi binaries compiled with MSVC (/GS- /EHs-) and linked with /SUBSYSTEM:EFI_APPLICATION, providing bare-metal entry point access to EFI_SYSTEM_TABLE and boot services.
