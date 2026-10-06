---
name: ags-sin-mapper
description: "This project is a user-mode mapper that places a custom kernel image into a section of an already signed driver. It uses physical-memory read and write primitives plus page-table permission changes to"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-sin-mapper
---

# SinMapper

**Author:** armvirus
**Source:** mcp-gamehacking/skills/ags-sin-mapper

## Description

This project is a user-mode mapper that places a custom kernel image into a section of an already signed driver. It uses physical-memory read and write primitives plus page-table permission changes to make the selected section executable and writable before mapping. The code also includes trace-cleaning steps such as clearing common kernel bookkeeping artifacts and provides an example driver entry format. Its primary use case is Windows kernel and anti-cheat evasion research focused on stealthy driver loading techniques.
