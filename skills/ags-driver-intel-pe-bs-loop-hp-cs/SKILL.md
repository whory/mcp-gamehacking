---
name: ags-driver-intel-pe-bs-loop-hp-cs
description: "This project is a Windows driver framework for loop-centric profiling based on Intel hardware performance features, specifically Last Branch Records and PEBS sampling."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-intel-pe-bs-loop-hp-cs
---

# Driver intel PEBs LoopHPCs

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-intel-pe-bs-loop-hp-cs

## Description

This project is a Windows driver framework for loop-centric profiling based on Intel hardware performance features, specifically Last Branch Records and PEBS sampling.
Its archived README describes LoopHPCs as a profiling framework for finding hot loops in running binaries, especially unpacking-oriented malware, and the source tree combines PEBS helpers, branch-record processing, and loop-tracking logic inside a filter-driver style project.
The core code consumes PEBS records, correlates eventing IPs, next IPs, and data addresses with LBR-derived control-flow context, then builds loop-oriented telemetry instead of only collecting raw counter values.
It is mainly useful for low-level Windows and reverse-engineering researchers studying hardware-assisted runtime profiling of tight loops and unpacking behavior.
