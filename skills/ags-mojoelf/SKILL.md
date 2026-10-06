---
name: ags-mojoelf
description: "This project is an ELF binary loader that runs in your application instead of as part of the C runtime."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mojoelf
---

# mojoelf

**Author:** icculus
**Source:** mcp-gamehacking/skills/ags-mojoelf

## Description

This project is an ELF binary loader that runs in your application instead of as part of the C runtime.
The most useful feature of this is that, unlike the standard dlopen(), it can load an ELF file from a place other than the filesystem.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / android memory loading area.
