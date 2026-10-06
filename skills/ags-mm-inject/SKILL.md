---
name: ags-mm-inject
description: "This project is a kernel DLL injector for Windows that hides execution by manipulating page permissions with NX-bit swapping and VAD-related techniques."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mm-inject
---

# MMInject

**Author:** SDXT
**Source:** mcp-gamehacking/skills/ags-mm-inject

## Description

This project is a kernel DLL injector for Windows that hides execution by manipulating page permissions with NX-bit swapping and VAD-related techniques.
It is primarily written in C with native Windows internals headers and includes code for dynamic kernel data handling, I/O, and loader logic.
The injector allocates writable pages, modifies page-table behavior under the hood to gain execute capability, and attempts to reduce obvious memory-protection artifacts.
It targets advanced game security and anti-cheat bypass research where stealthy kernel-assisted injection methods are studied.
