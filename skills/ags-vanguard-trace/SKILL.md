---
name: ags-vanguard-trace
description: "This project is a Windows kernel research tool for analyzing and intercepting encrypted imports in Vanguard's driver. It implements routines to locate the encrypted import table with signature scannin"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vanguard-trace
---

# VanguardTrace

**Author:** armvirus
**Source:** mcp-gamehacking/skills/ags-vanguard-trace

## Description

This project is a Windows kernel research tool for analyzing and intercepting encrypted imports in Vanguard's driver. It implements routines to locate the encrypted import table with signature scanning, decrypt target entries, and re-encrypt pointers when patching hooks. The sample hook flow demonstrates tracking calls such as CiCheckSignedFile and recovering import offsets from vgk.sys. It is intended for reverse engineering and anti-cheat internals research rather than general application development.
