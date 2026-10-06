---
name: ags-drvscan
description: "This project is drvscan, a Windows DMA/PCIe device scanner and memory forensics tool written in C. It enumerates PCI Express devices, identifies suspicious or unknown devices that could be DMA attack "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-drvscan
---

# drvscan

**Author:** ekknod
**Source:** mcp-gamehacking/skills/ags-drvscan

## Description

This project is drvscan, a Windows DMA/PCIe device scanner and memory forensics tool written in C. It enumerates PCI Express devices, identifies suspicious or unknown devices that could be DMA attack hardware (FPGA boards), and scans physical memory through direct PCIe access for known cheat or rootkit signatures. The tool supports pcileech-style memory acquisition and device fingerprinting. It is aimed at anti-cheat engineers and security researchers detecting DMA-based cheating hardware and unauthorized PCIe devices.
