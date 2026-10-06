---
name: ags-umap
description: "This project is umap, a minimalist Windows kernel driver mapper in C that manually maps an unsigned driver into kernel memory. It uses a vulnerable signed driver for physical memory access to allocate"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-umap
---

# umap

**Author:** btbd
**Source:** mcp-gamehacking/skills/ags-umap

## Description

This project is umap, a minimalist Windows kernel driver mapper in C that manually maps an unsigned driver into kernel memory. It uses a vulnerable signed driver for physical memory access to allocate kernel pool space, copy driver sections, process relocations, resolve imports, and invoke the mapped driver's entry point entirely from user mode. The mapper avoids creating registry traces or loading through standard driver loading paths. It is aimed at kernel researchers studying stealthy driver mapping techniques and their detection vectors.
