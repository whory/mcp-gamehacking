---
name: ags-umap-mapper
description: "This project is a Windows kernel-mode manual mapper proof of concept written in C. It hooks a kernel function pointer to receive mapping requests, copies PE images into executable kernel memory, and r"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-umap-mapper
---

# umap mapper

**Author:** FarmEquipment69
**Source:** mcp-gamehacking/skills/ags-umap-mapper

## Description

This project is a Windows kernel-mode manual mapper proof of concept written in C. It hooks a kernel function pointer to receive mapping requests, copies PE images into executable kernel memory, and resolves imports and relocations before calling the entry point. The code is structured as a Visual Studio driver project with helper utilities for pattern scanning and protected memory writes. Its main use case is low-level research into driver loading techniques used in anti-cheat evasion experiments.
