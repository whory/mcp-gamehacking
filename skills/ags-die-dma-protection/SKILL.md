---
name: ags-die-dma-protection
description: "This project is a Windows proof of concept that disables DMA protection mechanisms (IOMMU/VT-d) to re-enable direct physical memory access from external PCIe devices. It manipulates DMA remapping conf"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-die-dma-protection
---

# DieDMAProtection

**Author:** iqrw0
**Source:** mcp-gamehacking/skills/ags-die-dma-protection

## Description

This project is a Windows proof of concept that disables DMA protection mechanisms (IOMMU/VT-d) to re-enable direct physical memory access from external PCIe devices. It manipulates DMA remapping configuration to bypass protections that would otherwise block FPGA-based DMA attack hardware from reading game process memory. The C kernel driver demonstrates the attack surface of DMA protection implementations. It is aimed at security researchers studying DMA protection bypass techniques and IOMMU security boundaries.
