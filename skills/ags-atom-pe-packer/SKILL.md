---
name: ags-atom-pe-packer
description: "This project is AtomPePacker, a Windows PE executable packer that compresses and encrypts PE files with a runtime unpacking stub. It packs the original PE sections, encrypts them, and prepends a decom"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-atom-pe-packer
---

# AtomPePacker

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-atom-pe-packer

## Description

This project is AtomPePacker, a Windows PE executable packer that compresses and encrypts PE files with a runtime unpacking stub. It packs the original PE sections, encrypts them, and prepends a decompression loader that restores the original binary in memory at runtime. The packer handles imports, relocations, and TLS callbacks during unpacking. It is aimed at software protection researchers studying PE packing techniques.
