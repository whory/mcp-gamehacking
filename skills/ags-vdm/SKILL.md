---
name: ags-vdm
description: "This project is VDM (Voyager Driver Manager), a C++ library for exploiting vulnerable signed drivers to gain arbitrary physical memory read/write and kernel code execution on Windows. It provides a cl"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vdm
---

# VDM

**Author:** backengineering
**Source:** mcp-gamehacking/skills/ags-vdm

## Description

This project is VDM (Voyager Driver Manager), a C++ library for exploiting vulnerable signed drivers to gain arbitrary physical memory read/write and kernel code execution on Windows. It provides a clean API over multiple vulnerable driver backends (gdrv, cpuz, etc.) to read/write physical memory, translate virtual addresses, and execute shellcode in kernel mode. The library is designed as a modular backend for tools like kdmapper, msrexec, and bluepill. It is aimed at kernel exploitation researchers studying BYOVD attack primitives and building kernel-level tooling.
