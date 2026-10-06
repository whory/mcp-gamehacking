---
name: ags-driver-hwid-btbd-modified
description: "This project is a modified version of the BTBD hardware identifier spoofer adjusted for manual mapping on Windows 1909-era systems."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-hwid-btbd-modified
---

# Driver HWID btbd modified

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-hwid-btbd-modified

## Description

This project is a modified version of the BTBD hardware identifier spoofer adjusted for manual mapping on Windows 1909-era systems.
Its code hooks disk and partition control paths, rewrites serial-related data returned by storage IOCTLs, clears GPT identifiers, updates disk properties, disables SMART failure prediction, and also walks storahci raid units to overwrite serial strings deeper in the storage stack.
The result is not just a single serial patch but a broader storage-identity spoofing pipeline that tries to keep multiple disk-related query surfaces consistent after the driver is loaded.
It is mainly useful for Windows kernel researchers analyzing storage-stack HWID spoofing techniques, especially those derived from BTBD-style manually mapped drivers.
