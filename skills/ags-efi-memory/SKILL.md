---
name: ags-efi-memory
description: "efi-memory is a proof-of-concept EFI runtime driver for reading and writing virtual memory from firmware context."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-efi-memory
---

# efi memory

**Author:** SamuelTulach
**Source:** mcp-gamehacking/skills/ags-efi-memory

## Description

efi-memory is a proof-of-concept EFI runtime driver for reading and writing virtual memory from firmware context.
It uses a SetVariable hook communication method inspired by EfiGuard and includes both firmware-side and user-mode companion components.
The repository also contains a mapper client derived from a kdmapper-style workflow for manual mapping scenarios on Windows.
It is mainly aimed at firmware security research, low-level memory access experiments, and game security studies involving pre-OS or runtime driver interactions.
