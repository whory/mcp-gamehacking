---
name: ags-device-control-hooks-scanner
description: "This project is a kernel driver scanner that looks for suspicious hooks in IRP_MJ_DEVICE_CONTROL handlers. It is written in C++ as a KMDF driver and walks the \Driver object directory to enumerate loa"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-device-control-hooks-scanner
---

# device control hooks scanner

**Author:** Luchinkin
**Source:** mcp-gamehacking/skills/ags-device-control-hooks-scanner

## Description

This project is a kernel driver scanner that looks for suspicious hooks in IRP_MJ_DEVICE_CONTROL handlers. It is written in C++ as a KMDF driver and walks the \Driver object directory to enumerate loaded driver objects. For each driver, it checks whether the device-control dispatch pointer stays within the driver image bounds and attempts module resolution for out-of-range pointers. The primary use case is kernel integrity auditing and low-level security research around driver hook detection.
