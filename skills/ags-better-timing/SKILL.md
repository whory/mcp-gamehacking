---
name: ags-better-timing
description: "This project is a Linux KVM patch that improves virtual CPU timing behavior to bypass timing-based anti-VM checks."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-better-timing
---

# BetterTiming

**Author:** SamuelTulach
**Source:** mcp-gamehacking/skills/ags-better-timing

## Description

This project is a Linux KVM patch that improves virtual CPU timing behavior to bypass timing-based anti-VM checks.
It is delivered as a kernel patch with documentation and demonstration artifacts showing reduced detection by common VM-check tools.
The approach records VM-exit timing characteristics and offsets the guest TSC to make execution timing appear closer to bare metal.
It is mainly aimed at virtualization security research and testing anti-cheat or anti-analysis timing heuristics.
