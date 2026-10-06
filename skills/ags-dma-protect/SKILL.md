---
name: ags-dma-protect
description: "This project is a Windows kernel driver that protects against DMA (Direct Memory Access) attacks by configuring IOMMU/VT-d to restrict which PCIe devices can access system memory. It sets up DMA remap"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dma-protect
---

# DmaProtect

**Author:** cutecatsandvirtualmachines
**Source:** mcp-gamehacking/skills/ags-dma-protect

## Description

This project is a Windows kernel driver that protects against DMA (Direct Memory Access) attacks by configuring IOMMU/VT-d to restrict which PCIe devices can access system memory. It sets up DMA remapping tables to block unauthorized memory reads from FPGA-based DMA attack boards while allowing legitimate devices to operate normally. The C driver demonstrates defensive use of Intel VT-d technology. It is aimed at anti-cheat engineers and security researchers building DMA attack mitigations.
