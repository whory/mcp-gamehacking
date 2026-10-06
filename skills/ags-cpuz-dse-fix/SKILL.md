---
name: ags-cpuz-dse-fix
description: "This project is a Windows x64 utility that exploits a vulnerable CPU-Z driver to disable Driver Signature Enforcement and load unsigned kernel drivers."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cpuz-dse-fix
---

# CPUZ DSEFix

**Author:** SamLarenN
**Source:** mcp-gamehacking/skills/ags-cpuz-dse-fix

## Description

This project is a Windows x64 utility that exploits a vulnerable CPU-Z driver to disable Driver Signature Enforcement and load unsigned kernel drivers.
It is written in C++ and contains kernel memory patching logic, system-variable pattern scanning, and helper routines for driver loading workflows.
The implementation targets g_CiEnable on older systems and g_CiOptions on newer systems, with explicit notes about PatchGuard-related crash risk.
It is primarily used in kernel security research and anti-cheat bypass experimentation involving unsigned drivers.
