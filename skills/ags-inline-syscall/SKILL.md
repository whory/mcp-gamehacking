---
name: ags-inline-syscall
description: "This project is a header-only C++ library for generating direct Windows system calls inline."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-inline-syscall
---

# inline syscall

**Author:** JustasMasiulis
**Source:** mcp-gamehacking/skills/ags-inline-syscall

## Description

This project is a header-only C++ library for generating direct Windows system calls inline.
It provides initialization and macro-based wrappers so callers can invoke native routines without normal import table usage.
The implementation is focused on compact, inlinable machine code and low overhead on x64 Windows targets.
It is mainly used in low-level system programming, anti-hooking experiments, and game security research.
