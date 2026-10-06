---
name: ags-k-lldb
description: "An LLDB-based kernel debugger for Linux that provides live and offline kernel debugging through custom LLDB plugins and Python scripting, built against LLVM-19 infrastructure."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-k-lldb
---

# kLLDB

**Author:** djolertrk
**Source:** mcp-gamehacking/skills/ags-k-lldb

## Description

An LLDB-based kernel debugger for Linux that provides live and offline kernel debugging through custom LLDB plugins and Python scripting, built against LLVM-19 infrastructure.
It includes both a live debugging plugin (kLLDBLive) for running kernel sessions and an offline plugin for post-mortem analysis with automated bug reporting scripts.
It is mainly useful for kernel developers and security researchers debugging Linux kernel internals using LLDB instead of GDB-based workflows.
