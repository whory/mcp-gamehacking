---
name: ags-pci-ban
description: "This project is a proof of concept for collecting hardware identifiers directly from PCI and AHCI devices."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pci-ban
---

# PCIBan

**Author:** KDIo3
**Source:** mcp-gamehacking/skills/ags-pci-ban

## Description

This project is a proof of concept for collecting hardware identifiers directly from PCI and AHCI devices.
It brute-forces PCI enumeration and identifies storage-related controllers without relying on higher-level operating system APIs.
The goal is to reduce exposure to software hooks that may spoof or intercept conventional HWID queries.
It is primarily useful for anti-cheat and low-level platform security research, with an explicit experimental caveat.
