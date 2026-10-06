---
name: ags-checkhv-um
description: "This project is a user-mode hypervisor detection tool for Windows that checks for the presence of Type-1 and Type-2 hypervisors using multiple techniques. It tests CPUID hypervisor present bit, timing"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-checkhv-um
---

# checkhv um

**Author:** zer0condition
**Source:** mcp-gamehacking/skills/ags-checkhv-um

## Description

This project is a user-mode hypervisor detection tool for Windows that checks for the presence of Type-1 and Type-2 hypervisors using multiple techniques. It tests CPUID hypervisor present bit, timing-based detection through RDTSC/RDTSCP anomalies, VMCS artifact scanning, and known hypervisor signature matching. The C implementation runs entirely from user mode without requiring drivers. It is aimed at anti-cheat developers and security researchers building hypervisor detection capabilities.
