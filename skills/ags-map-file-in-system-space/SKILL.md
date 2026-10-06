---
name: ags-map-file-in-system-space
description: "A kernel-mode technique for mapping files directly into system address space using internal NT functions."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-map-file-in-system-space
---

# Map file in system space

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-map-file-in-system-space

## Description

A kernel-mode technique for mapping files directly into system address space using internal NT functions.
Demonstrates using MmCreateSection and other undocumented APIs to map file contents into kernel memory without standard file I/O, useful for stealthy driver loading.
