---
name: ags-mhydeath
description: "This project exploits miHoYo's mhyprot2.sys anti-cheat kernel driver for arbitrary kernel operations. The mhyprot2 driver, originally signed for Genshin Impact's anti-cheat, contains vulnerabilities a"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mhydeath
---

# mhydeath

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-mhydeath

## Description

This project exploits miHoYo's mhyprot2.sys anti-cheat kernel driver for arbitrary kernel operations. The mhyprot2 driver, originally signed for Genshin Impact's anti-cheat, contains vulnerabilities allowing unprivileged users to read/write kernel memory and terminate processes. This BYOVD tool leverages mhyprot2 for kernel access. It is aimed at BYOVD researchers studying game anti-cheat driver vulnerabilities being weaponized for system-level access.
