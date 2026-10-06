---
name: ags-injdrv
description: "This project is a Windows kernel-mode DLL injector driver in C that injects DLLs into processes using APC (Asynchronous Procedure Call) delivery from kernel space. The driver registers a process creat"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-injdrv
---

# injdrv

**Author:** wbenny
**Source:** mcp-gamehacking/skills/ags-injdrv

## Description

This project is a Windows kernel-mode DLL injector driver in C that injects DLLs into processes using APC (Asynchronous Procedure Call) delivery from kernel space. The driver registers a process creation callback to intercept target process startup, then queues a user-mode APC that loads the specified DLL via LdrLoadDll. This kernel-based approach bypasses user-mode injection detection and anti-cheat hooks. It is aimed at kernel researchers studying kernel-mode injection primitives and their detection from an anti-cheat perspective.
