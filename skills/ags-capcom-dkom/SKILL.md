---
name: ags-capcom-dkom
description: "A Direct Kernel Object Manipulation (DKOM) tool leveraging the Capcom.sys driver's ring-0 code execution."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-capcom-dkom
---

# CapcomDKOM

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-capcom-dkom

## Description

A Direct Kernel Object Manipulation (DKOM) tool leveraging the Capcom.sys driver's ring-0 code execution.
Uses the Capcom IOCTL (0xAA013044) to execute shellcode payloads in kernel mode via MmGetSystemRoutineAddress for resolving kernel APIs.
