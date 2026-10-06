---
name: ags-efi-xplorer
description: "This project is efiXplorer, an IDA Pro plugin for automated analysis of UEFI firmware binaries. It identifies EFI protocols by GUID matching, annotates Boot Services and Runtime Services table calls, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-efi-xplorer
---

# efiXplorer

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-efi-xplorer

## Description

This project is efiXplorer, an IDA Pro plugin for automated analysis of UEFI firmware binaries. It identifies EFI protocols by GUID matching, annotates Boot Services and Runtime Services table calls, resolves protocol interface usage, and reconstructs PEI/DXE driver dependencies. The plugin significantly reduces manual effort in UEFI firmware reverse engineering. It is aimed at firmware security researchers analyzing UEFI BIOS implementations, bootkits, and EFI-level malware.
