---
name: ags-hyper-deceit
description: "This project is a C++ library that impersonates Hyper-V behavior and intercepts selected hypercalls from the Windows kernel."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hyper-deceit
---

# HyperDeceit

**Author:** Xyrem
**Source:** mcp-gamehacking/skills/ags-hyper-deceit

## Description

This project is a C++ library that impersonates Hyper-V behavior and intercepts selected hypercalls from the Windows kernel.
It exposes ready-to-hook implementations for low-level paths such as TLB flushing, sleep and shutdown handling, address-space switching, and spinlock behavior.
The codebase focuses on virtualization internals, kernel compatibility constraints, and integration as a reusable library component.
It is aimed at advanced kernel and anti-cheat researchers exploring hypervisor-layer interception and stealth techniques.
