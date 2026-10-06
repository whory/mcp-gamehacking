---
name: ags-ophion
description: "This project is a stealth Intel VT-x Type-2 hypervisor implemented as a Windows x64 WDM kernel driver in C. It sets up VMX operation with EPT management, handles VM exits for events such as CPUID and "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ophion
---

# Ophion

**Author:** zer0condition
**Source:** mcp-gamehacking/skills/ags-ophion

## Description

This project is a stealth Intel VT-x Type-2 hypervisor implemented as a Windows x64 WDM kernel driver in C. It sets up VMX operation with EPT management, handles VM exits for events such as CPUID and control-register access, broadcasts processor virtualization across all cores, and includes anti-detection measures like CPUID result caching, CR4.VMXE hiding, TSC offset compensation, and a private host CR3 to avoid leaking hypervisor page tables. It is aimed at kernel security researchers studying lightweight hypervisor construction, anti-cheat hypervisor-detection bypass, and hardware-assisted virtualization internals on Windows.
