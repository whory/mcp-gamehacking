---
name: ags-pcileech-isa-bridge
description: "This project implements an ISA-bridge-style PCIe emulation profile for DMA firmware experiments."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pcileech-isa-bridge
---

# Pcileech ISABridge

**Author:** Herooyyy
**Source:** mcp-gamehacking/skills/ags-pcileech-isa-bridge

## Description

This project implements an ISA-bridge-style PCIe emulation profile for DMA firmware experiments.
It is built primarily with Verilog and SystemVerilog, with Vivado project files and generated bitstream outputs.
The release demonstrates PID and VID spoofing through bridge-device simulation to study anti-cheat hardware filtering.
It is aimed at researchers analyzing how game anti-cheat systems classify and block suspicious PCIe peripherals.
