---
name: ags-efi-seek
description: "efiSeek is a Ghidra analyzer plugin that automates reverse engineering tasks for EFI binaries. It is implemented in Java and focuses on identifying known EFI GUIDs, protocol usage patterns, and callba"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-efi-seek
---

# efiSeek

**Author:** DSecurity
**Source:** mcp-gamehacking/skills/ags-efi-seek

## Description

efiSeek is a Ghidra analyzer plugin that automates reverse engineering tasks for EFI binaries. It is implemented in Java and focuses on identifying known EFI GUIDs, protocol usage patterns, and callback relationships such as LOCATE_PROTOCOL, NOTIFY, and INSTALL_PROTOCOL_INTERFACE flows. The project also includes helper scripts and GUID data to speed up headless workflows and structured firmware analysis. It is primarily aimed at firmware security researchers who investigate UEFI internals, attack surface, and low-level behavior.
