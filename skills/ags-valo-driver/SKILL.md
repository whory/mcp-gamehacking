---
name: ags-valo-driver
description: "This project is a Windows kernel driver designed for reading Valorant game process memory while bypassing Vanguard anti-cheat's kernel-level protections. It implements memory reading through physical "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-valo-driver
---

# valo driver

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-valo-driver

## Description

This project is a Windows kernel driver designed for reading Valorant game process memory while bypassing Vanguard anti-cheat's kernel-level protections. It implements memory reading through physical address translation, CR3 manipulation, or MDL mapping to access the game process without using standard APIs that Vanguard monitors. The C driver demonstrates kernel-level anti-cheat bypass techniques specific to Vanguard. It is aimed at anti-cheat researchers studying Vanguard's kernel protection and its potential bypass vectors.
