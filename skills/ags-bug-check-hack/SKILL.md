---
name: ags-bug-check-hack
description: "This project is a Windows driver and user-mode utility for modifying BSOD appearance and behavior."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bug-check-hack
---

# BugCheckHack

**Author:** NSG650
**Source:** mcp-gamehacking/skills/ags-bug-check-hack

## Description

This project is a Windows driver and user-mode utility for modifying BSOD appearance and behavior.
It manages kernel loading through a service workflow, resolves required kernel offsets, and patches bugcheck-related routines.
The codebase is mostly C and C++ with a desktop controller application and supporting kernel components.
It is intended for low-level Windows crash mechanism research and demonstration of kernel patching techniques.
