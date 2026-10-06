---
name: ags-kaspersky-hook
description: "A system call hooking framework that leverages Kaspersky's hypervisor (klhk.sys) to intercept syscalls."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kaspersky-hook
---

# KasperskyHook

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-kaspersky-hook

## Description

A system call hooking framework that leverages Kaspersky's hypervisor (klhk.sys) to intercept syscalls.
Exploits Kaspersky's IA32_LSTAR modification mechanism which redirects system calls through its own dispatch table, loading klhk.sys and a custom driver to subvert the syscall handler.
