---
name: ags-windows-software-policy
description: "This project documents and analyzes the Windows kernel licensing path exposed through the SystemPolicyInformation query class."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-windows-software-policy
---

# windows software policy

**Author:** KiFilterFiberContext
**Source:** mcp-gamehacking/skills/ags-windows-software-policy

## Description

This project documents and analyzes the Windows kernel licensing path exposed through the SystemPolicyInformation query class.
It explains how user-mode licensing components communicate with the kernel policy driver and where policy data is handled.
The repository includes C source and headers for low-level experimentation, plus a Python helper script for related binary processing.
Primary languages are C and Python.
It is mainly useful for Windows internals, reverse engineering, and software protection research.
