---
name: ags-dma-pe-dumper
description: "This project is a DMA-based PE dumper for extracting process images through a PCIe FPGA setup. It is implemented in C++ and integrates with leechcore and VMMDLL-style components for low-level memory a"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dma-pe-dumper
---

# DMA PE Dumper

**Author:** Trustings
**Source:** mcp-gamehacking/skills/ags-dma-pe-dumper

## Description

This project is a DMA-based PE dumper for extracting process images through a PCIe FPGA setup. It is implemented in C++ and integrates with leechcore and VMMDLL-style components for low-level memory access. The tool is designed to handle difficult scenarios such as CR3 shuffling while locating and dumping target executable or DLL memory. Its main use case is advanced memory forensics and game anti-cheat research workflows.
