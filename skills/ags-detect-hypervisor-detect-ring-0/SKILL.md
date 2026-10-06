---
name: ags-detect-hypervisor-detect-ring-0
description: "This project is a ring-0 hypervisor detection test driver written for manual-mapped kernel deployment."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-detect-hypervisor-detect-ring-0
---

# Detect Hypervisor detect ring 0

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-detect-hypervisor-detect-ring-0

## Description

This project is a ring-0 hypervisor detection test driver written for manual-mapped kernel deployment.
Its checks combine the CPUID hypervisor bit, comparisons between invalid and hypervisor CPUID leaves, timing attacks around VM-exit behavior using the TSC, APERF, and MPERF MSRs, and Intel LBR or DEBUGCTL consistency checks.
The README credits Secret Club's hypervisor-detection research, and the driver simply prints each heuristic result from DriverEntry instead of building a larger enforcement pipeline.
It is mainly useful for anti-cheat and low-level security researchers comparing multiple kernel-mode heuristics for spotting emulation or custom hypervisors.
