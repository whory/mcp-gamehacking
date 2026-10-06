---
name: ags-kdu
description: "This project is the Kernel Driver Utility (KDU), a Windows tool for loading unsigned kernel drivers by exploiting vulnerable legitimate signed drivers (BYOVD). It includes an extensible provider syste"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kdu
---

# KDU

**Author:** hfiref0x
**Source:** mcp-gamehacking/skills/ags-kdu

## Description

This project is the Kernel Driver Utility (KDU), a Windows tool for loading unsigned kernel drivers by exploiting vulnerable legitimate signed drivers (BYOVD). It includes an extensible provider system supporting dozens of known vulnerable drivers (Intel, ASUS, MSI, Gigabyte, etc.) to gain arbitrary kernel read/write or code execution, then uses those primitives to map a custom unsigned driver into kernel memory. The C codebase automates DSE bypass, driver mapping, and cleanup. It is aimed at security researchers studying driver signature enforcement bypass and the BYOVD attack surface.
