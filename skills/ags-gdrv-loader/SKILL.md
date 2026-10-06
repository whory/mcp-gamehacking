---
name: ags-gdrv-loader
description: "This project is gdrv-loader, a Windows tool that loads unsigned kernel drivers by exploiting the GIGABYTE gdrv64.sys vulnerable signed driver. It uses gdrv's arbitrary memory read/write IOCTL to manua"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-gdrv-loader
---

# gdrv loader

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-gdrv-loader

## Description

This project is gdrv-loader, a Windows tool that loads unsigned kernel drivers by exploiting the GIGABYTE gdrv64.sys vulnerable signed driver. It uses gdrv's arbitrary memory read/write IOCTL to manually map a custom driver into kernel memory, bypassing Driver Signature Enforcement. It is aimed at kernel researchers studying GIGABYTE driver exploitation and DSE bypass through BYOVD.
