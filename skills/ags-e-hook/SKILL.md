---
name: ags-e-hook
description: "This project is a framework for building Android ARM64 uprobe hooks with eBPF modules. It uses Go for orchestration and C for eBPF hook logic, with wrappers for reading and writing memory, logging, an"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-e-hook
---

# eHook

**Author:** ShinoLeah
**Source:** mcp-gamehacking/skills/ags-e-hook

## Description

This project is a framework for building Android ARM64 uprobe hooks with eBPF modules. It uses Go for orchestration and C for eBPF hook logic, with wrappers for reading and writing memory, logging, and submitting custom event data. Users configure target package and library offsets, then implement on-enter and on-leave handlers for instrumentation or behavior modification. It is mainly aimed at rooted-device dynamic analysis, mobile game research, and lightweight runtime tracing.
