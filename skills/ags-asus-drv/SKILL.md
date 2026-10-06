---
name: ags-asus-drv
description: "This project exploits ASUS's kernel driver for arbitrary kernel memory access. ASUS motherboard utility drivers provide IOCTLs for hardware monitoring that can be abused for reading/writing physical m"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-asus-drv
---

# AsusDrv

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-asus-drv

## Description

This project exploits ASUS's kernel driver for arbitrary kernel memory access. ASUS motherboard utility drivers provide IOCTLs for hardware monitoring that can be abused for reading/writing physical memory, providing a BYOVD primitive. This tool wraps the vulnerable ASUS driver interface for kernel exploitation. It is aimed at BYOVD researchers studying ASUS driver vulnerabilities.
