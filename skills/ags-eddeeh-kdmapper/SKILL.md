---
name: ags-eddeeh-kdmapper
description: "This project is kdmapper, a Windows kernel driver mapper that loads unsigned drivers into kernel memory by exploiting the Intel iqvw64e.sys vulnerable signed driver. It uses the driver's arbitrary phy"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eddeeh-kdmapper
---

# kdmapper

**Author:** eddeeh
**Source:** mcp-gamehacking/skills/ags-eddeeh-kdmapper

## Description

This project is kdmapper, a Windows kernel driver mapper that loads unsigned drivers into kernel memory by exploiting the Intel iqvw64e.sys vulnerable signed driver. It uses the driver's arbitrary physical memory read/write IOCTL to manually map a custom driver: allocating kernel pool memory, copying sections, resolving imports against ntoskrnl, processing relocations, and calling the driver entry point. The C++ tool automates the full mapping pipeline including vulnerable driver deployment and cleanup. It is aimed at kernel researchers and cheat developers studying manual driver mapping and DSE bypass techniques.
