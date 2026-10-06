---
name: ags-rw-proc-mem33
description: "rwProcMem33 is an ARM64 Linux kernel driver suite for process memory read and write operations plus hardware-breakpoint debugging."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rw-proc-mem33
---

# rwProcMem33

**Author:** abcz316
**Source:** mcp-gamehacking/skills/ags-rw-proc-mem33

## Description

rwProcMem33 is an ARM64 Linux kernel driver suite for process memory read and write operations plus hardware-breakpoint debugging.
It is implemented mainly in C with companion C++ user-space demos for memory search, memory dump, remote control, and Cheat Engine style server workflows.
The exposed interfaces include process open and close, memory access, process and mapping queries, privilege elevation, and kernel module hiding.
Its primary audience is Android game security researchers and reverse engineers working on low-level runtime instrumentation.
