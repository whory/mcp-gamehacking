---
name: ags-dumpit-linux
description: "This project is a Linux memory acquisition utility that captures system memory into analysis-friendly dump files."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dumpit-linux
---

# dumpit linux

**Author:** MagnetForensics
**Source:** mcp-gamehacking/skills/ags-dumpit-linux

## Description

This project is a Linux memory acquisition utility that captures system memory into analysis-friendly dump files.
It is written in Rust and reads from /proc/kcore to produce ELF core output, with optional compressed tar.zst packaging for easier storage and transfer.
The resulting dumps are designed to work directly with common debugging and forensic tools such as gdb, crash, and drgn.
Its primary use case is incident response and memory forensics on Linux systems without requiring a custom kernel module.
