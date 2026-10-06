---
name: ags-cheat-engine-dma-plugin
description: "This project is a Cheat Engine plugin that enables memory reading and writing through DMA (Direct Memory Access) hardware such as PCILeech-compatible FPGA boards. It replaces Cheat Engine's standard p"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cheat-engine-dma-plugin
---

# Cheat Engine DMA Plugin

**Author:** kaijia2022
**Source:** mcp-gamehacking/skills/ags-cheat-engine-dma-plugin

## Description

This project is a Cheat Engine plugin that enables memory reading and writing through DMA (Direct Memory Access) hardware such as PCILeech-compatible FPGA boards. It replaces Cheat Engine's standard process memory access with DMA-based physical memory operations, allowing memory scanning and editing without the target system's OS detecting the access. The C/C++ plugin integrates with the pcileech/LeechCore library. It is aimed at DMA-based game security researchers and anti-cheat analysts testing DMA attack scenarios through Cheat Engine's familiar interface.
