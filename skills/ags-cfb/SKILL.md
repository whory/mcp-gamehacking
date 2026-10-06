---
name: ags-cfb
description: "This project is CFB (Canadian Furious Beaver), a Windows kernel-mode IRP (I/O Request Packet) monitoring framework. It installs a filter driver that hooks the IRP dispatch table of target drivers, log"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cfb
---

# CFB

**Author:** hugsy
**Source:** mcp-gamehacking/skills/ags-cfb

## Description

This project is CFB (Canadian Furious Beaver), a Windows kernel-mode IRP (I/O Request Packet) monitoring framework. It installs a filter driver that hooks the IRP dispatch table of target drivers, logging all IRP requests with parameters, buffers, and return values. The C kernel driver and Python client allow real-time monitoring of driver communication for reverse engineering IOCTL interfaces. It is aimed at Windows kernel researchers and reverse engineers studying driver communication protocols and IOCTL fuzzing.
