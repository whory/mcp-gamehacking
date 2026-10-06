---
name: ags-hvdetecc
description: "This project demonstrates various techniques for detecting the presence of a hypervisor or virtual machine monitor on x86-64 systems."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hvdetecc
---

# hvdetecc

**Author:** can1357
**Source:** mcp-gamehacking/skills/ags-hvdetecc

## Description

This project demonstrates various techniques for detecting the presence of a hypervisor or virtual machine monitor on x86-64 systems.
It includes processor behavior tests, performance monitoring counter analysis, memory management and TLB anomaly detection, timing analysis using multiple sources including DRAM power utilization side-channels, MSR behavior checks, and interrupt handling tests.
The C++ codebase targets both Intel VMX and AMD SVM implementations, also detecting Type 1 hypervisors via SMBIOS, ACPI tables, and PCI enumeration.
It is mainly useful for anti-cheat and hypervisor security researchers studying VM detection techniques and virtualization evasion analysis.
