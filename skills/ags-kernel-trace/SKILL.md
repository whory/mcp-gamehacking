---
name: ags-kernel-trace
description: "This project is a Linux and Android kernel module that uses uprobes to hook large numbers of user-space functions. Written in C and C++, it exposes user-side headers and helper components for configur"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-trace
---

# Kernel Trace

**Author:** AndroidReverser-Test
**Source:** mcp-gamehacking/skills/ags-kernel-trace

## Description

This project is a Linux and Android kernel module that uses uprobes to hook large numbers of user-space functions. Written in C and C++, it exposes user-side headers and helper components for configuring target libraries, offsets, and hook metadata. It supports tracefs-based output and provides APIs to register and clear probe points across supported kernel versions. The module is intended for dynamic analysis, reverse engineering, and low-level behavior tracing on Android systems.
