---
name: ags-roak
description: "This project is a Windows kernel-mode driver that provides read and write memory access through a custom communication channel. It hooks HAL timer query functions for covert user-kernel communication,"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-roak
---

# roak

**Author:** KeServiceDescriptorTable
**Source:** mcp-gamehacking/skills/ags-roak

## Description

This project is a Windows kernel-mode driver that provides read and write memory access through a custom communication channel. It hooks HAL timer query functions for covert user-kernel communication, handles memory operations via packet-based request dispatching, and includes kernel offset resolution and system utility modules. It is mainly useful for kernel security researchers studying covert driver communication techniques and kernel memory access patterns.
