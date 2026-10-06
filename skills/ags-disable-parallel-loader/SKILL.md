---
name: ags-disable-parallel-loader
description: "x64dbg plugin that disables the Windows parallel DLL loader (introduced in Windows 10) by patching the LdrpMapAndSnapWork and related ntdll internals via the Process Hacker Native API (phnt). Forces s"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-disable-parallel-loader
---

# DisableParallelLoader

**Author:** mrexodia
**Source:** mcp-gamehacking/skills/ags-disable-parallel-loader

## Description

x64dbg plugin that disables the Windows parallel DLL loader (introduced in Windows 10) by patching the LdrpMapAndSnapWork and related ntdll internals via the Process Hacker Native API (phnt). Forces sequential dependency loading during process creation, making it easier to trace and debug DLL load order in x64dbg.
