---
name: ags-android-wuwa
description: "Android ARM64 loadable kernel module providing stealthy process memory access by bypassing CFI and kprobe blacklists at load time. It supports both software page-table walking and hardware address tra"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-android-wuwa
---

# android wuwa

**Author:** fuqiuluo
**Source:** mcp-gamehacking/skills/ags-android-wuwa

## Description

Android ARM64 loadable kernel module providing stealthy process memory access by bypassing CFI and kprobe blacklists at load time. It supports both software page-table walking and hardware address translation via the ARM64 AT instruction, direct physical memory R/W through phys_to_virt (up to 50 MB per operation), PTE-level mapping injection that bypasses VMA structures, and DMA buffer sharing between processes. Communication uses either IOCTL or a kernel-space socket protocol, with optional module and signal hiding.
