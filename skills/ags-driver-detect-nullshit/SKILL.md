---
name: ags-driver-detect-nullshit
description: "This project is a compact detector for a specific style of manually mapped driver hook that replaces exported kernel routines with simple absolute jump stubs."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-detect-nullshit
---

# Driver Detect nullshit

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-detect-nullshit

## Description

This project is a compact detector for a specific style of manually mapped driver hook that replaces exported kernel routines with simple absolute jump stubs.
Its archived README calls it a simple Null driver detector, and the code walks export tables of modules such as `win32kfull.sys`, `win32kbase.sys`, `dxgkrnl.sys`, and `ntoskrnl.exe` looking for `mov rax, imm64 ; jmp rax` style patches whose targets fall outside the owning image.
Rather than providing a full integrity framework, it focuses on one common inline-hook signature often used to redirect syscall-related functions during driver mapping or communication setup.
It is mainly useful for anti-cheat and defensive kernel researchers studying lightweight detection of crude export-hook trampolines in core Windows modules.
