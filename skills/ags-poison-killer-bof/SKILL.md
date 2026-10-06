---
name: ags-poison-killer-bof
description: "This project is a collection of Beacon Object Files (BOFs) that use a vulnerable kernel driver (PoisonX.sys) to perform process killing, driver loading and unloading, and file deletion from kernel mod"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-poison-killer-bof
---

# PoisonKiller bof

**Author:** Muz1K1zuM
**Source:** mcp-gamehacking/skills/ags-poison-killer-bof

## Description

This project is a collection of Beacon Object Files (BOFs) that use a vulnerable kernel driver (PoisonX.sys) to perform process killing, driver loading and unloading, and file deletion from kernel mode. The C-based BOFs are cross-compiled with MinGW for use in Cobalt Strike or similar C2 frameworks, with a Python helper script. It is mainly useful for red team operators and security researchers studying BYOVD-based process termination and kernel-level file operations through BOF payloads.
