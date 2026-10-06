---
name: ags-kernel-forge
description: "This project is a Windows library for invoking kernel routines from user mode on systems hardened by VBS and HVCI."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-forge
---

# KernelForge

**Author:** Cr4sh
**Source:** mcp-gamehacking/skills/ags-kernel-forge

## Description

This project is a Windows library for invoking kernel routines from user mode on systems hardened by VBS and HVCI.
It is implemented in C++ with a split design: one component provides kernel-memory primitives through a signed driver wrapper, and another builds higher-level function-call capabilities.
The repository includes headers, static libraries, DLL bindings, and an example that demonstrates kernel-to-user DLL injection techniques.
Its primary use case is advanced kernel security research and exploit-prototyping under modern platform defenses.
