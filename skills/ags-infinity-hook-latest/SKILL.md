---
name: ags-infinity-hook-latest
description: "This project is a Windows kernel ETW hooking implementation that adapts InfinityHook-style syscall interception to newer system versions. It demonstrates how ETW tracing paths and HalPrivateDispatchTa"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-infinity-hook-latest
---

# InfinityHook latest

**Author:** Oxygen1a1
**Source:** mcp-gamehacking/skills/ags-infinity-hook-latest

## Description

This project is a Windows kernel ETW hooking implementation that adapts InfinityHook-style syscall interception to newer system versions. It demonstrates how ETW tracing paths and HalPrivateDispatchTable callbacks can be leveraged to redirect syscall handling without directly patching Nt routines. The code is written in C/C++ as a Visual Studio kernel driver project and includes detailed reverse engineering notes around PMC counter setup and trace configuration. It is aimed at advanced anti-cheat bypass research and low-level Windows security experimentation.
