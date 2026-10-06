---
name: ags-windows-10-22h2-vulnerable-driver-communication
description: "This project is a user-mode wrapper around asromgdrv.sys that demonstrates using a still-loadable vulnerable driver on Windows 10 22H2 and Windows 11 for kernel-side services."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-windows-10-22h2-vulnerable-driver-communication
---

# Windows 10 22H2 Vulnerable driver communication

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-windows-10-22h2-vulnerable-driver-communication

## Description

This project is a user-mode wrapper around asromgdrv.sys that demonstrates using a still-loadable vulnerable driver on Windows 10 22H2 and Windows 11 for kernel-side services.
The archived README highlights contiguous kernel memory allocation and control-register read-write as the main exposed primitives, and the communication layer opens \\.\AsrOmgDrv and drives the vendor IOCTLs directly through DeviceIoControl.
Its communication.cpp implements helpers for allocating and freeing contiguous memory plus reading and writing control registers, so the repository is essentially a concise reversed interface for a vulnerable signed driver.
It is mainly useful for Windows kernel researchers studying BYOVD communication, control-register abuse, and how small reversed IOCTL wrappers can become the foundation for more advanced kernel tooling.
