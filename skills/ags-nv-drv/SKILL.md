---
name: ags-nv-drv
description: "This project is a library for exploiting NVIDIA's kernel driver (nvoclock/nvlddmkm) to gain arbitrary physical memory read/write from user mode. It sends crafted IOCTLs to the NVIDIA driver to read an"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nv-drv
---

# NVDrv

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-nv-drv

## Description

This project is a library for exploiting NVIDIA's kernel driver (nvoclock/nvlddmkm) to gain arbitrary physical memory read/write from user mode. It sends crafted IOCTLs to the NVIDIA driver to read and write physical memory, providing a BYOVD primitive that can be used for driver mapping, kernel patching, or anti-cheat bypass without loading a custom driver. The C++ library wraps the vulnerable IOCTL interface. It is aimed at kernel security researchers studying NVIDIA driver vulnerabilities and BYOVD exploitation.
