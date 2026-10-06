---
name: ags-anti-kernel-debug-poc
description: "This project is a proof of concept for detecting and preventing kernel-mode debugging on Windows. It implements detection checks for kernel debuggers like WinDbg and KD by testing debug port status, K"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-anti-kernel-debug-poc
---

# AntiKernelDebug POC

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-anti-kernel-debug-poc

## Description

This project is a proof of concept for detecting and preventing kernel-mode debugging on Windows. It implements detection checks for kernel debuggers like WinDbg and KD by testing debug port status, KdDebuggerEnabled flag, KUSER_SHARED_DATA fields, and interrupt-based detection techniques. The C driver demonstrates anti-kernel-debug techniques used by anti-cheat systems and protected software. It is aimed at kernel security researchers studying kernel debugger detection and anti-debug bypass methods.
