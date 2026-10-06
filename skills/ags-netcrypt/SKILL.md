---
name: ags-netcrypt
description: ".NET PE file packer written in C# that embeds a target managed assembly as an encrypted and compressed resource inside a loader stub executable. At runtime the stub decrypts, decompresses, and invokes"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-netcrypt
---

# netcrypt

**Author:** friedkiwi
**Source:** mcp-gamehacking/skills/ags-netcrypt

## Description

.NET PE file packer written in C# that embeds a target managed assembly as an encrypted and compressed resource inside a loader stub executable. At runtime the stub decrypts, decompresses, and invokes the original assembly's entry point entirely within the CLR, requiring no native code and introducing near-zero unpacking delay. A companion WinForms GUI (SimplePacker) provides a drag-and-drop interface for packing assemblies.
