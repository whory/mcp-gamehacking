---
name: ags-rdtsc-kvm-handler
description: "This project provides modified KVM handler sources that intercept and alter RDTSC timing behavior on both Intel VMX and AMD SVM paths."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rdtsc-kvm-handler
---

# RDTSC KVM Handler

**Author:** WCharacter
**Source:** mcp-gamehacking/skills/ags-rdtsc-kvm-handler

## Description

This project provides modified KVM handler sources that intercept and alter RDTSC timing behavior on both Intel VMX and AMD SVM paths.
It explains how to patch kernel virtualization code, adjust fake timestamp deltas, and configure QEMU CPU flags such as disabling RDTSCP.
The implementation is in Linux kernel C code and focuses on low-level hypervisor timing control.
Its primary use case is virtualization and anti-detection research, including experiments around timing-based anti-cheat checks.
