---
name: ags-dumpulator
description: "Python framework for emulating x86/x64 code directly from Windows minidump files using Unicorn Engine, reconstructing the process memory layout, thread contexts, loaded modules, and handle table from "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dumpulator
---

# dumpulator

**Author:** mrexodia
**Source:** mcp-gamehacking/skills/ags-dumpulator

## Description

Python framework for emulating x86/x64 code directly from Windows minidump files using Unicorn Engine, reconstructing the process memory layout, thread contexts, loaded modules, and handle table from dump streams. Provides NT syscall stubs, PEB/TEB emulation, and API hooking to execute arbitrary functions from the dump's address space without a live process.
