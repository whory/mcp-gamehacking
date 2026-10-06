---
name: ags-vm-aware
description: "This project is VMAware, a cross-platform C++ library for virtual machine detection. It implements over 100 detection techniques checking for hypervisor CPUID leaves, known VM artifacts in registry/fi"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vm-aware
---

# VMAware

**Author:** kernelwernel
**Source:** mcp-gamehacking/skills/ags-vm-aware

## Description

This project is VMAware, a cross-platform C++ library for virtual machine detection. It implements over 100 detection techniques checking for hypervisor CPUID leaves, known VM artifacts in registry/filesystem/MAC addresses, timing-based side channels, hardware fingerprints, and driver signatures to determine whether code is running inside VMware, VirtualBox, Hyper-V, QEMU/KVM, or other hypervisors. The header-only library provides a simple API returning confidence scores. It is aimed at anti-cheat developers, malware researchers, and security engineers implementing VM detection or studying VM evasion techniques.
