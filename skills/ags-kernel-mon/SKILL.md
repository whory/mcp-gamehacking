---
name: ags-kernel-mon
description: "KernelMon is a virtualization-based Windows monitoring framework that traces kernel activity in a ProcMon-like workflow. It hooks selected kernel-mode APIs and forwards logs to a user-mode interface, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-mon
---

# KernelMon

**Author:** alal4465
**Source:** mcp-gamehacking/skills/ags-kernel-mon

## Description

KernelMon is a virtualization-based Windows monitoring framework that traces kernel activity in a ProcMon-like workflow. It hooks selected kernel-mode APIs and forwards logs to a user-mode interface, covering file system, registry, process, and thread operations. The implementation uses a kernel driver with VMX/EPT-style low-level interception components and a companion desktop UI. It is intended for kernel security research, behavior analysis, and anti-cheat or malware investigation in controlled VM environments.
