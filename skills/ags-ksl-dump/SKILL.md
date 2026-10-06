---
name: ags-ksl-dump
description: "This project extracts credentials from PPL-protected LSASS using only Microsoft-signed components already present on the system."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ksl-dump
---

# KslDump

**Author:** andreisss
**Source:** mcp-gamehacking/skills/ags-ksl-dump

## Description

This project extracts credentials from PPL-protected LSASS using only Microsoft-signed components already present on the system.
It exploits a vulnerable version of Microsoft Defender's KslD.sys driver that exposes IOCTL 0x222044 with sub-commands for arbitrary kernel memory read via MmCopyMemory and CPU control register disclosure for KASLR defeat.
The attack chain requires no external driver loading, as it points the service back to the old unpatched driver binary left on disk by Microsoft.
It is mainly useful for security researchers studying BYOVD-style attacks using vendor-shipped vulnerable drivers and PPL bypass techniques.
