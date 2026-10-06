---
name: ags-driver-driver-no-image
description: "This project is a kernel-driver proof of concept built around executing custom shellcode through other drivers in order to avoid exposing a normal standalone driver image path."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-driver-no-image
---

# Driver DriverNoImage

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-driver-no-image

## Description

This project is a kernel-driver proof of concept built around executing custom shellcode through other drivers in order to avoid exposing a normal standalone driver image path.
The archived README states that it was designed to inject shellcode into another driver to bypass signature-related constraints, and the source tree includes dedicated shellcode files, inline hook helpers, and patch modules rather than a conventional device interface only.
Its implementation patches existing dispatch routines such as NTFS driver handlers, temporarily disables write protection to install inline jumps, and preserves trampolines so the original path can still be called or restored on unload.
It is mainly useful for Windows kernel researchers studying driver dispatch hijacking, shellcode-based execution inside existing drivers, and techniques for reducing the visibility of custom kernel payloads.
