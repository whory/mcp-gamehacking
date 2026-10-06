---
name: ags-eft-leecher
description: "This project is a DMA-based cheat toolbox for Escape From Tarkov that reads game memory externally through FPGA hardware."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eft-leecher
---

# EFTLeecher

**Author:** bytemyass
**Source:** mcp-gamehacking/skills/ags-eft-leecher

## Description

This project is a DMA-based cheat toolbox for Escape From Tarkov that reads game memory externally through FPGA hardware.
It includes features for visor effect removal, night/thermal vision effects, recoil elimination, stamina bypass, weight removal, and stealth injection with configurable settings through an INI file.
The C++ codebase uses MemProcFS for DMA memory access and supports map file loading and automatic disconnection for operational security.
It is mainly useful for DMA security researchers studying external game memory manipulation and anti-cheat evasion techniques in EFT.
