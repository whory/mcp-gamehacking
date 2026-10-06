---
name: ags-detection-hyper-v
description: "This project is a minimal kernel-mode Hyper-V detection driver that reads hypervisor state directly from KPCR or KPRCB structures."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-detection-hyper-v
---

# Detection Hyper v

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-detection-hyper-v

## Description

This project is a minimal kernel-mode Hyper-V detection driver that reads hypervisor state directly from KPCR or KPRCB structures.
The implementation targets Windows 10 build 17763 headers, calls KeGetPcr, walks to CurrentPrcb, and inspects PowerState.Hypervisor plus PowerState.HvTargetState to decide whether the machine is running as a Hyper-V guest.
The driver then reports the result with debug prints and exits with STATUS_VIRUS_INFECTED, making it closer to a focused kernel experiment than a reusable anti-cheat module.
It is mainly useful for defensive researchers studying build-specific kernel structure checks for Hyper-V presence without relying solely on user-mode CPUID probes.
