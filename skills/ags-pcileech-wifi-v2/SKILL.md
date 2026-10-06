---
name: ags-pcileech-wifi-v2
description: "A PCILeech FPGA firmware variant that emulates a wireless network adapter's PCIe configuration space, allowing a DMA attack device to masquerade as a WiFi card on the target system's PCIe bus."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pcileech-wifi-v2
---

# pcileech wifi v2

**Author:** dom0ng
**Source:** mcp-gamehacking/skills/ags-pcileech-wifi-v2

## Description

A PCILeech FPGA firmware variant that emulates a wireless network adapter's PCIe configuration space, allowing a DMA attack device to masquerade as a WiFi card on the target system's PCIe bus.
It builds on ekknod's pcileech-wifi project with Verilog-based PCIe 7x IP core integration and customizable device ID generation scripts for various FPGA boards.
It is mainly useful for DMA security researchers studying PCIe device impersonation techniques and anti-cheat DMA detection evasion.
