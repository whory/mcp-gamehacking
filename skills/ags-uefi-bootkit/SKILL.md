---
name: ags-uefi-bootkit
description: "UEFI-Bootkit is a compact proof-of-concept bootkit project that targets the UEFI boot chain with mostly C code and minimal assembly dependency. The codebase includes a UEFI application and runtime dri"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-uefi-bootkit
---

# UEFI Bootkit

**Author:** ajkhoury
**Source:** mcp-gamehacking/skills/ags-uefi-bootkit

## Description

UEFI-Bootkit is a compact proof-of-concept bootkit project that targets the UEFI boot chain with mostly C code and minimal assembly dependency. The codebase includes a UEFI application and runtime driver components intended to persist beyond ExitBootServices and continue execution into the OS boot process. It demonstrates practical EFI build setup, image loading logic, and runtime protocol handling in a firmware context. The project is mainly used for low-level boot security research, including studies of pre-OS persistence and detection challenges.
