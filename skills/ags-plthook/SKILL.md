---
name: ags-plthook
description: "This project is plthook, a cross-platform C library for hooking functions through PLT (Procedure Linkage Table) and GOT (Global Offset Table) modification on Linux, macOS, and Windows. It intercepts d"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-plthook
---

# plthook

**Author:** kubo
**Source:** mcp-gamehacking/skills/ags-plthook

## Description

This project is plthook, a cross-platform C library for hooking functions through PLT (Procedure Linkage Table) and GOT (Global Offset Table) modification on Linux, macOS, and Windows. It intercepts dynamically linked function calls by replacing GOT/IAT entries, redirecting calls to user-defined replacement functions. The library supports ELF, Mach-O, and PE binary formats. It is aimed at security researchers, profiling tool developers, and anyone needing portable dynamic function interception.
