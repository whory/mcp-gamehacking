---
name: ags-memflow-kvm
description: "Memflow connector implemented as a Linux kernel module that maps KVM virtual machine physical pages directly into userspace, enabling fast cross-VM memory introspection without standard KVM APIs. The "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-memflow-kvm
---

# memflow kvm

**Author:** memflow
**Source:** mcp-gamehacking/skills/ags-memflow-kvm

## Description

Memflow connector implemented as a Linux kernel module that maps KVM virtual machine physical pages directly into userspace, enabling fast cross-VM memory introspection without standard KVM APIs. The kernel module uses page-table walking and vmtools to expose guest memory through ioctl-based character device interfaces with Rust userspace bindings.
