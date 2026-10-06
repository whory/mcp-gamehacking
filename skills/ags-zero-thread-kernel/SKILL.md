---
name: ags-zero-thread-kernel
description: "This project is a Windows kernel communication proof of concept that executes kernel code without creating visible system threads. It abuses existing kernel thread contexts or timer callbacks to run c"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-zero-thread-kernel
---

# ZeroThreadKernel

**Author:** zer0condition
**Source:** mcp-gamehacking/skills/ags-zero-thread-kernel

## Description

This project is a Windows kernel communication proof of concept that executes kernel code without creating visible system threads. It abuses existing kernel thread contexts or timer callbacks to run custom code, avoiding detection by anti-cheat systems that enumerate system threads to find manually mapped drivers. The C driver demonstrates threadless kernel execution techniques. It is aimed at kernel researchers studying stealthy code execution and anti-cheat thread detection evasion.
