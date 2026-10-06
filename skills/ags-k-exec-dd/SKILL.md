---
name: ags-k-exec-dd
description: "A proof-of-concept exploiting the Kernel Security Support Provider Interface (KSecDD.sys) for arbitrary kernel code execution."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-k-exec-dd
---

# KExecDD

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-k-exec-dd

## Description

A proof-of-concept exploiting the Kernel Security Support Provider Interface (KSecDD.sys) for arbitrary kernel code execution.
Injects a DLL into LSASS to use IOCTL_KSEC_IPC_SET_FUNCTION_RETURN, which allows executing arbitrary kernel addresses, then disables DSE by overwriting ci.dll!g_CiOptions.
