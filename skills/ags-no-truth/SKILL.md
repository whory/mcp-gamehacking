---
name: ags-no-truth
description: "This project is an open-source Windows x64 research implementation for hiding user-mode memory with VT-x and EPT techniques. It demonstrates how read operations can be redirected to fake values while "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-no-truth
---

# NoTruth

**Author:** KelvinMsft
**Source:** mcp-gamehacking/skills/ags-no-truth

## Description

This project is an open-source Windows x64 research implementation for hiding user-mode memory with VT-x and EPT techniques. It demonstrates how read operations can be redirected to fake values while execution semantics remain controlled, enabling experiments around checksum and integrity bypasses. The codebase is largely C and C++ kernel-level code with driver and test components designed for virtualization-capable environments. It is aimed at low-level security researchers investigating memory deception, anti-cheat evasion, and hypervisor-assisted instrumentation.
