---
name: ags-driver-communication-list
description: "This repository is a compact reference list of user-mode to kernel-mode call paths that can be used to study how Windows graphics and UI entry points flow into lower-level kernel components."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-communication-list
---

# Driver Communication List

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-driver-communication-list

## Description

This repository is a compact reference list of user-mode to kernel-mode call paths that can be used to study how Windows graphics and UI entry points flow into lower-level kernel components.
Its archived README focuses on concrete examples such as `win32u.dll` calls resolving through `win32k.sys` and `win32base.sys` before reaching targets in `dxgkrnl.sys`, making it more of a mapping notebook than a traditional code project.
The value of the repo is in the call-chain examples themselves, which provide quick breadcrumbs for tracing communication paths that can later be analyzed in the debugger or disassembler.
It is mainly useful for Windows kernel and reverse-engineering researchers who want a starting point for investigating syscall paths and driver communication surfaces.
