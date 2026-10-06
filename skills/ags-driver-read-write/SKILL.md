---
name: ags-driver-read-write
description: "This project is a manually mapped kernel read/write driver that hijacks `Beep.sys` device-control handling to expose memory copy and module-base queries."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-read-write
---

# Driver read write

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-read-write

## Description

This project is a manually mapped kernel read/write driver that hijacks `Beep.sys` device-control handling to expose memory copy and module-base queries.
Its control path swaps `IRP_MJ_DEVICE_CONTROL` on `\Driver\Beep`, validates user requests, attaches to target processes for direct memory access, and reuses the hooked driver object so the mapped payload can masquerade as a more legitimate kernel module.
The repository also includes cleanup logic for `PiDDBCacheTable` and `MmUnloadedDrivers`, so it doubles as both a communication example and a trace-reduction reference for vulnerable-driver-based mapping workflows.
It is mainly useful for Windows kernel researchers studying IRP hijacking, basic process memory primitives, and post-mapping artifact cleanup in unsigned driver loaders.
