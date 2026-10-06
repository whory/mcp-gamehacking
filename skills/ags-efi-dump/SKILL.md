---
name: ags-efi-dump
description: "This project is a proof-of-concept EFI runtime driver paired with a Windows client for direct process memory read and write operations after the operating system has booted."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-efi-dump
---

# EfiDump

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-efi-dump

## Description

This project is a proof-of-concept EFI runtime driver paired with a Windows client for direct process memory read and write operations after the operating system has booted.
The archived README describes it as a minimal example of an EFI-based process dumper, and the source tree includes both the `driver` runtime component and a separate `client` application that communicates with it.
Its build and usage flow centers on compiling `driver.efi` with `gnu-efi`, loading it from an EDK2 shell on a FAT32 USB device, then using the client side after Windows starts, with the author explicitly calling out its lack of hardening and memory safety checks.
It is mainly useful for low-level Windows and firmware researchers studying how runtime EFI drivers can survive into the OS and expose memory access primitives to a companion user-mode tool.
