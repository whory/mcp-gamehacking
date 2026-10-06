---
name: ags-kernel-hook-framework
description: "This project is a Linux kernel inline-hook framework for intercepting, replacing, and restoring kernel functions at runtime."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-hook-framework
---

# kernel hook framework

**Author:** WeiJiLab
**Source:** mcp-gamehacking/skills/ags-kernel-hook-framework

## Description

This project is a Linux kernel inline-hook framework for intercepting, replacing, and restoring kernel functions at runtime.
It provides a core module and sample modules, supports multiple architectures including x86, x86_64, arm, arm64, and riscv64, and exposes runtime control via proc interfaces.
The framework focuses on trampoline-based patching and extended symbol resolution to work with broader kallsyms targets.
It is designed for kernel debugging, live experimentation, and low-level security research including anti-cheat-related kernel studies.
