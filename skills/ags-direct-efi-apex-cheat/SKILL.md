---
name: ags-direct-efi-apex-cheat
description: "This project combines a user-mode game cheat client with a UEFI runtime component to access kernel memory paths from an EFI context."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-direct-efi-apex-cheat
---

# Direct EFI Apex Cheat

**Author:** TheCruZ
**Source:** mcp-gamehacking/skills/ags-direct-efi-apex-cheat

## Description

This project combines a user-mode game cheat client with a UEFI runtime component to access kernel memory paths from an EFI context.
The C and C++ code implements command-based memory operations, process base resolution, and gameplay features such as glow and aim assistance logic.
Communication is built around runtime variable hooks and low-level Windows kernel function pointers bridged from the EFI side.
Its primary use case is firmware-assisted cheat and anti-cheat bypass experimentation.
