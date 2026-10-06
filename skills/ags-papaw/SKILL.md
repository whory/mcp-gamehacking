---
name: ags-papaw
description: "A permissively-licensed executable packer for Linux that compresses statically-linked ELF binaries using LZMA/zstd/miniz, enables self-replacement on disk, and optionally provides basic anti-debugging"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-papaw
---

# papaw

**Author:** dimkr
**Source:** mcp-gamehacking/skills/ags-papaw

## Description

A permissively-licensed executable packer for Linux that compresses statically-linked ELF binaries using LZMA/zstd/miniz, enables self-replacement on disk, and optionally provides basic anti-debugging protection.
It reduces executable size for resource-constrained devices while supporting multiple compression backends and a simple papawify/unpapawify workflow.
It is mainly useful for security researchers studying ELF packing, anti-debugging techniques, and binary protection mechanisms on Linux.
