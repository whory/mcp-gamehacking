---
name: ags-access-updated
description: "This project is an updated fork of btbd/access that provides handle-free kernel-mode process operations by hooking the xKdEnumerateDebuggingDevices pointer for kernel-usermode communication."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-access-updated
---

# access updated

**Author:** bromoket
**Source:** mcp-gamehacking/skills/ags-access-updated

## Description

This project is an updated fork of btbd/access that provides handle-free kernel-mode process operations by hooking the xKdEnumerateDebuggingDevices pointer for kernel-usermode communication.
It replaces hardcoded offsets with Zydis-based dynamic pattern finding for runtime discovery of kernel functions, supporting Windows 10 (1607+) through Windows 11 (24H2) in a single binary.
The kernel driver performs PROCESS_ALL_ACCESS operations without creating real handles, using a clean .data section hook with no inline patches.
It is mainly useful for kernel security researchers studying handleless process access, syscall hooking, and version-independent Windows kernel techniques.
