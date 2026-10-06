---
name: ags-no-more-bug-check-reloaded
description: "This project is a UEFI-based no-BSOD proof of concept that patches the kernel during boot."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-no-more-bug-check-reloaded
---

# NoMoreBugCheckReloaded

**Author:** NSG650
**Source:** mcp-gamehacking/skills/ags-no-more-bug-check-reloaded

## Description

This project is a UEFI-based no-BSOD proof of concept that patches the kernel during boot.
It moves patching from a runtime Windows driver into an EFI-stage loader and then alters crash handling behavior early in startup.
The code combines C and C++ kernel and firmware components, including export lookup, pattern search, and low-level memory overwrite helpers.
It is designed for advanced firmware-to-kernel security research on early boot patching and bugcheck interception.
