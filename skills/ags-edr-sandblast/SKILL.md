---
name: ags-edr-sandblast
description: "This project is a C tool for bypassing EDR and ETW-based detection on Windows by exploiting vulnerable signed drivers (BYOVD). It patches kernel callback routines, removes process and thread notificat"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-edr-sandblast
---

# EDRSandblast

**Author:** wavestone-cdt
**Source:** mcp-gamehacking/skills/ags-edr-sandblast

## Description

This project is a C tool for bypassing EDR and ETW-based detection on Windows by exploiting vulnerable signed drivers (BYOVD). It patches kernel callback routines, removes process and thread notification callbacks, disables ETW TI provider feeds, and unhooks ntdll syscall stubs in user mode to blind security products. The tool automates offset resolution for multiple Windows builds, handles driver loading and cleanup, and includes a credential dumping payload as a demonstration. It is aimed at red team operators and security researchers studying EDR evasion techniques and kernel callback manipulation.
