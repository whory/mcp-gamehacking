---
name: ags-vm
description: "A cross-platform C/C++ memory access library providing unified read/write/module-enumeration APIs across multiple backends: Windows kernel-mode (walking ActiveProcessLinks via EPROCESS), user-mode (Re"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vm
---

# vm

**Author:** ekknod
**Source:** mcp-gamehacking/skills/ags-vm

## Description

A cross-platform C/C++ memory access library providing unified read/write/module-enumeration APIs across multiple backends: Windows kernel-mode (walking ActiveProcessLinks via EPROCESS), user-mode (ReadProcessMemory/WriteProcessMemory), Linux (/proc/pid/mem), PCILeech (via VMMDLL/LeechCore DMA), KVM (QEMU guest introspection), Proton (Linux-hosted Windows games), and EFI-variable-based kernel communication.
Each backend implements the same vm.h interface for process lookup, CR3-based page-table translation, PEB/LDR module walking, and pattern scanning, allowing cheat or analysis code to swap between kernel driver, DMA hardware, and hypervisor transports without changing game-facing logic.
It is mainly useful for game security researchers and cheat developers studying cross-platform remote process memory access patterns and DMA/KVM-based read-write primitives.
