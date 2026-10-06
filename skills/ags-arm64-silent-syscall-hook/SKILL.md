---
name: ags-arm64-silent-syscall-hook
description: "This project demonstrates silent syscall hooking on ARM64 Linux by patching the kernel SVC handling path."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-arm64-silent-syscall-hook
---

# arm64 silent syscall hook

**Author:** 3intermute
**Source:** mcp-gamehacking/skills/ags-arm64-silent-syscall-hook

## Description

This project demonstrates silent syscall hooking on ARM64 Linux by patching the kernel SVC handling path.
Instead of modifying sys_call_table entries directly, it redirects selected syscall numbers through alternate logic to reduce common detection indicators.
The implementation is low-level C with manual function splicing and trampoline-style patching around exception-handler code paths.
It is intended for kernel security researchers analyzing stealth rootkit techniques and improving syscall hook detection methods.
