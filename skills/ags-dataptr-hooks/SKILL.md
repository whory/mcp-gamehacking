---
name: ags-dataptr-hooks
description: "This project is a Windows kernel proof of concept for communication through .data pointer hooks instead of standard IOCTL paths. It demonstrates syscall-reachable hook targets, including flows related"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dataptr-hooks
---

# DataptrHooks

**Author:** 0mWindyBug
**Source:** mcp-gamehacking/skills/ags-dataptr-hooks

## Description

This project is a Windows kernel proof of concept for communication through .data pointer hooks instead of standard IOCTL paths. It demonstrates syscall-reachable hook targets, including flows related to NtConvertBetweenAuxiliaryCounterAndPerformanceCounter and code integrity querying. The repository includes user-mode clients and kernel driver projects in C and C++, plus research notes about locating indirect call sites through control-flow-guard artifacts. It is intended for kernel security researchers studying stealthier mapped-driver communication and detection tradeoffs.
