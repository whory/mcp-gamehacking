---
name: ags-ddma
description: "This project is a proof-of-concept for using disk devices (HBA controllers) to perform DMA operations on Windows, bypassing hypervisor-level memory protections."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ddma
---

# ddma

**Author:** btbd
**Source:** mcp-gamehacking/skills/ags-ddma

## Description

This project is a proof-of-concept for using disk devices (HBA controllers) to perform DMA operations on Windows, bypassing hypervisor-level memory protections.
It demonstrates how native hypervisors like Hyper-V that allow unvirtualized device access enable SLAT (Second Level Address Translation) circumvention through ATA disk device DMA.
The kernel driver was demonstrated modifying Hyper-V at runtime on bare metal, though it only supports ATA and may be limited by 64-bit addressing capabilities of the HBA.
It is mainly useful for kernel and hypervisor security researchers studying disk-based DMA attacks and SLAT bypass techniques.
