---
name: ags-e-dbg
description: "This project is a lightweight command-line debugger for Android ARM64 built on eBPF rather than traditional ptrace attachment. It is implemented mainly in Go with supporting C and eBPF components and "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-e-dbg
---

# eDBG

**Author:** Sh11no
**Source:** mcp-gamehacking/skills/ags-e-dbg

## Description

This project is a lightweight command-line debugger for Android ARM64 built on eBPF rather than traditional ptrace attachment. It is implemented mainly in Go with supporting C and eBPF components and provides a GDB-like interactive workflow with breakpoint, memory, register, and thread inspection commands. Its file-plus-offset breakpoint model is designed for fast startup and stronger resistance to anti-debug interference in protected apps. It targets mobile reverse engineering and game security analysis on rooted devices with modern kernels.
