---
name: ags-bad-rentdrv2
description: "This project exploits the Rentdrv2.sys vulnerable signed driver for kernel memory access on Windows. It uses Rentdrv2's insecure IOCTL interface to achieve arbitrary physical memory read/write for dri"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bad-rentdrv2
---

# BadRentdrv2

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-bad-rentdrv2

## Description

This project exploits the Rentdrv2.sys vulnerable signed driver for kernel memory access on Windows. It uses Rentdrv2's insecure IOCTL interface to achieve arbitrary physical memory read/write for driver mapping, kernel patching, or anti-cheat bypass. It is aimed at BYOVD researchers studying Rentdrv2 driver exploitation.
