---
name: ags-kernel-cheat-for-directx3d
description: "This project is a kernel and user-mode communication sample that hijacks NtDxgkGetTrackedWorkloadStatistics in dxgkrnl and then uses the same channel for simple memory and drawing operations."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-cheat-for-directx3d
---

# Kernel Cheat for directx3D

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-kernel-cheat-for-directx3d

## Description

This project is a kernel and user-mode communication sample that hijacks NtDxgkGetTrackedWorkloadStatistics in dxgkrnl and then uses the same channel for simple memory and drawing operations.
The driver overwrites the dxgkrnl export with a small absolute jump stub, exposes read and write helpers built on MmCopyVirtualMemory and KeStackAttachProcess, and resolves win32k GDI routines such as NtUserGetDC, NtGdiPatBlt, and NtGdiCreateSolidBrush for drawing boxes from kernel context.
The user-mode client calls NtDxgkGetTrackedWorkloadStatistics through win32u.dll, passes a NULL_MEMORY structure that can request module bases or draw rectangles, and treats the hooked graphics syscall as its command dispatcher.
It is mainly useful for Windows kernel researchers studying graphics-adjacent communication hooks, ad hoc read-write services, and kernel-assisted overlay rendering through win32k exports.
