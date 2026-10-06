---
name: ags-cs2-kvm-dma
description: "This project is a CS2 (Counter-Strike 2) cheat that operates from a KVM virtual machine using DMA (Direct Memory Access) for memory reading. It runs the cheat logic in a separate VM or host OS, access"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cs2-kvm-dma
---

# cs2 kvm dma

**Author:** atombottle
**Source:** mcp-gamehacking/skills/ags-cs2-kvm-dma

## Description

This project is a CS2 (Counter-Strike 2) cheat that operates from a KVM virtual machine using DMA (Direct Memory Access) for memory reading. It runs the cheat logic in a separate VM or host OS, accessing the game's physical memory through DMA hardware or KVM's memory mapping, rendering radar or ESP information outside the game's OS. This architecture makes the cheat invisible to the game's anti-cheat running inside the guest VM. It is aimed at security researchers studying KVM/DMA-based cheat architectures and their detection challenges.
