---
name: ags-hook-swap-context
description: "This project is a Windows kernel proof of concept for hooking context-switch related execution paths."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hook-swap-context
---

# HookSwapContext

**Author:** 1401199262
**Source:** mcp-gamehacking/skills/ags-hook-swap-context

## Description

This project is a Windows kernel proof of concept for hooking context-switch related execution paths.
It uses an ETW/CKCL-based hook path and custom stack-frame checks to invoke a handler during selected scheduling flow.
The code is written in C++ and includes low-level modules for trace control, syscall-facing hooks, and kernel utility routines.
Its main use case is experimenting with thread scheduling interception techniques for kernel security research.
