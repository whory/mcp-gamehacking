---
name: ags-pcileech-amdpci
description: "This project is a DMA firmware profile that emulates an AMD PCI device model for PCILeech-compatible hardware."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pcileech-amdpci
---

# Pcileech AMDPCI

**Author:** Herooyyy
**Source:** mcp-gamehacking/skills/ags-pcileech-amdpci

## Description

This project is a DMA firmware profile that emulates an AMD PCI device model for PCILeech-compatible hardware.
It is implemented mostly in Verilog and SystemVerilog with Vivado IP components and build scripts for 35T, 75T, and ZDMA boards.
The implementation focuses on no-interrupt communication behavior and hardware identity spoofing concepts.
Its main use case is anti-cheat resilience testing and research into hardware-signature-based detection in game security.
