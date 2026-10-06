---
name: ags-origami
description: "A .NET assembly packer that compresses managed executables and stores the compressed payload within PE format structures, abusing either the debug directory or a custom PE section (.origami) for data "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-origami
---

# Origami

**Author:** dr4k0nia
**Source:** mcp-gamehacking/skills/ags-origami

## Description

A .NET assembly packer that compresses managed executables and stores the compressed payload within PE format structures, abusing either the debug directory or a custom PE section (.origami) for data storage.
It includes a runtime relocating loader (RelocLoader) that decompresses and executes the original assembly from the embedded PE data at runtime.
It is mainly useful for security researchers studying .NET packing techniques, PE format abuse, and managed code protection mechanisms.
