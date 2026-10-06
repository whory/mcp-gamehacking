---
name: ags-diskjacker
description: "Diskjacker is a proof-of-concept project that hijacks Hyper-V VM-exit handling at runtime using a DMA-based approach."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-diskjacker
---

# Diskjacker

**Author:** LabGuy94
**Source:** mcp-gamehacking/skills/ags-diskjacker

## Description

Diskjacker is a proof-of-concept project that hijacks Hyper-V VM-exit handling at runtime using a DMA-based approach.
It combines C++ kernel and usermode components with assembly stubs for low-level mapping and execution transfer.
The workflow depends on specific virtualization and hardware conditions and demonstrates adaptation of DDMA-style primitives to hypervisor research.
It is aimed at kernel and virtualization security researchers rather than general application developers.
