---
name: ags-driver-k-dtour
description: "This project is a small kernel detour library for patching exported Windows kernel routines without pulling in external dependencies."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-k-dtour
---

# Driver KDtour

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-k-dtour

## Description

This project is a small kernel detour library for patching exported Windows kernel routines without pulling in external dependencies.
Its archived README explicitly presents it as an old but simple hooking library for functions such as `MmCopyMemory` and `MmCopyVirtualMemory`, and the implementation centers on a `c_detour` class that saves stolen bytes, builds a custom absolute jump stub, and writes patches through MDL-backed writable mappings.
The sample entry point shows the library being used to hook `KeAttachProcess`, while the detour helper is written to avoid more obvious page-guard style tricks and keep installation and removal self-contained.
It is mainly useful for Windows kernel researchers who want a compact reference for inline detours, custom trampoline stubs, and low-friction kernel hook experiments.
