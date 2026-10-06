---
name: ags-s4mapper
description: "This project is a Windows kernel driver mapper that uses Samsung's S4 vulnerable driver for loading unsigned drivers into kernel memory. It exploits S4's memory access IOCTLs to manually map a custom "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-s4mapper
---

# S4Mapper

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-s4mapper

## Description

This project is a Windows kernel driver mapper that uses Samsung's S4 vulnerable driver for loading unsigned drivers into kernel memory. It exploits S4's memory access IOCTLs to manually map a custom driver: allocating pool memory, copying sections, fixing relocations, resolving imports, and invoking the entry point. It is aimed at kernel researchers studying driver mapping through Samsung BYOVD primitives.
