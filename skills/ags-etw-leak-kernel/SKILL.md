---
name: ags-etw-leak-kernel
description: "EtwLeakKernel is a proof-of-concept that leaks kernel memory addresses through ETW stack traces. It starts ETW consumption, requests stack data from providers, and parses event output to recover kerne"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-etw-leak-kernel
---

# EtwLeakKernel

**Author:** Idov31
**Source:** mcp-gamehacking/skills/ags-etw-leak-kernel

## Description

EtwLeakKernel is a proof-of-concept that leaks kernel memory addresses through ETW stack traces. It starts ETW consumption, requests stack data from providers, and parses event output to recover kernel pointers. The implementation is in C++ for Windows and requires administrative privileges to start consuming provider events. It is intended for exploitation research and for studying kernel address exposure paths.
