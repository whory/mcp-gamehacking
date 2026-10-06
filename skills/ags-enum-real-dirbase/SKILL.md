---
name: ags-enum-real-dirbase
description: "This project is a Windows kernel-mode driver proof of concept for enumerating real process directory base values (CR3) from physical memory structures."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-enum-real-dirbase
---

# enum real dirbase

**Author:** Rythorndoran
**Source:** mcp-gamehacking/skills/ags-enum-real-dirbase

## Description

This project is a Windows kernel-mode driver proof of concept for enumerating real process directory base values (CR3) from physical memory structures.
It is written in C++ for the Windows Driver Kit and implements low-level paging helpers, kernel pattern scanning, and PFN database traversal.
The code initializes self-referencing page table bases, resolves MmPfnDatabase at runtime, and walks physical ranges to recover process context data.
It is mainly useful for kernel anti-cheat research, memory forensics experiments, and studying how hidden or protected address spaces are tracked.
