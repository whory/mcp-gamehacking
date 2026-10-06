---
name: ags-pciem
description: "This project is a Linux kernel framework for creating synthetic userspace PCIe device emulation without requiring actual hardware."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pciem
---

# pciem

**Author:** cakehonolulu
**Source:** mcp-gamehacking/skills/ags-pciem

## Description

This project is a Linux kernel framework for creating synthetic userspace PCIe device emulation without requiring actual hardware.
It creates virtual PCIe devices that appear as legitimate PCI devices to the host OS, enabling PCIe driver development and testing entirely in software.
The kernel module uses novel techniques to populate synthetic cards in the PCI subsystem, differing from libvfio-user by operating directly on the host without requiring a VM or QEMU.
It is mainly useful for PCIe security researchers and DMA tool developers studying PCIe device emulation and driver interaction without physical hardware.
