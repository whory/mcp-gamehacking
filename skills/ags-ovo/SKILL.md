---
name: ags-ovo
description: "Android ARM64 kernel driver module that exposes process memory read/write, MMU page-table manipulation (mmuhack), and touch input simulation through a kernel-space TCP socket server. It provides VMA t"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ovo
---

# ovo

**Author:** fuqiuluo
**Source:** mcp-gamehacking/skills/ags-ovo

## Description

Android ARM64 kernel driver module that exposes process memory read/write, MMU page-table manipulation (mmuhack), and touch input simulation through a kernel-space TCP socket server. It provides VMA traversal and address-to-PFN mapping for virtual-to-physical translation, a peekaboo module for stealth memory access, and client SDKs in C++ and Rust for userspace or cross-device communication.
