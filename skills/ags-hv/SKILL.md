---
name: ags-hv
description: "This project is a minimal Intel VT-x hypervisor for Windows written in C. It sets up VMX root mode, configures VMCS (Virtual Machine Control Structure), handles VM exits for CPUID, MSR access, and con"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hv
---

# hv

**Author:** zer0condition
**Source:** mcp-gamehacking/skills/ags-hv

## Description

This project is a minimal Intel VT-x hypervisor for Windows written in C. It sets up VMX root mode, configures VMCS (Virtual Machine Control Structure), handles VM exits for CPUID, MSR access, and control register operations, and virtualizes the running operating system. The driver operates as a Type-2 hypervisor beneath the existing OS. It is aimed at kernel researchers learning Intel VT-x hypervisor development and studying hardware-assisted virtualization internals.
