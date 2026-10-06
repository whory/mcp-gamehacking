---
name: ags-hwid
description: "This project is a hardware ID spoofer for Windows that modifies disk, volume, NIC, ARP, SMBIOS, boot, and GPU identifiers at the kernel level."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hwid
---

# hwid

**Author:** btbd
**Source:** mcp-gamehacking/skills/ags-hwid

## Description

This project is a hardware ID spoofer for Windows that modifies disk, volume, NIC, ARP, SMBIOS, boot, and GPU identifiers at the kernel level.
The kernel driver intercepts and modifies IOCTL responses to return spoofed hardware serial numbers and identifiers, while the user-mode component handles registry keys and common tracking files.
It was tested on Windows 10 versions from 1507 through 1903 and targets x64 systems, though NVME-specific IOCTLs are not handled.
It is mainly useful for game security researchers studying hardware fingerprinting techniques and HWID-based ban evasion methods.
