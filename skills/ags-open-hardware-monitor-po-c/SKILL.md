---
name: ags-open-hardware-monitor-po-c
description: "This project is a minimal proof of concept for a vulnerability in OpenHardwareMonitorLib.sys that exposes direct model-specific register access to user mode."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-open-hardware-monitor-po-c
---

# OpenHardwareMonitor PoC

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-open-hardware-monitor-po-c

## Description

This project is a minimal proof of concept for a vulnerability in OpenHardwareMonitorLib.sys that exposes direct model-specific register access to user mode.
The code opens the device and wraps two IOCTLs, 0x9C402084 and 0x9C402088, to read and write arbitrary MSRs through simple read_msr and write_msr helper functions.
Because the repository is intentionally small and centered on the driver interaction itself, it works more like a focused demonstration of the exposed primitive than a larger exploitation framework.
It is mainly useful for Windows security researchers studying vulnerable hardware-monitoring drivers, MSR exposure bugs, and the risk of user-mode access to privileged CPU controls.
