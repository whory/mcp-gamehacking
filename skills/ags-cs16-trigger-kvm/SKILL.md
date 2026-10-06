---
name: ags-cs16-trigger-kvm
description: "This project is a CS 1.6 triggerbot that operates from a KVM/QEMU host, reading game memory through KVM's guest memory access APIs. It detects when the crosshair is over an enemy and automatically fir"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cs16-trigger-kvm
---

# cs16 trigger kvm

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-cs16-trigger-kvm

## Description

This project is a CS 1.6 triggerbot that operates from a KVM/QEMU host, reading game memory through KVM's guest memory access APIs. It detects when the crosshair is over an enemy and automatically fires by injecting input events. The KVM-based approach makes the cheat invisible to anti-cheat running inside the guest VM. It is aimed at game security researchers studying KVM/hypervisor-based cheat architectures.
