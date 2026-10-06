---
name: ags-efi-driver-access
description: "This project demonstrates loading an EFI driver during boot to provide privileged memory access in Windows sessions."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-efi-driver-access
---

# EFI Driver Access

**Author:** TheCruZ
**Source:** mcp-gamehacking/skills/ags-efi-driver-access

## Description

This project demonstrates loading an EFI driver during boot to provide privileged memory access in Windows sessions.
It includes an EFI-side runtime module and a user-space client that issues read, write, and process-base requests.
The implementation mixes C/C++ with GNU-EFI and Visual Studio components and documents build and boot workflow details.
It is primarily intended for kernel and anti-cheat bypass research involving pre-OS execution paths.
