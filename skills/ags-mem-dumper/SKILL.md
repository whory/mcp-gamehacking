---
name: ags-mem-dumper
description: "Android memory dumping tool that extracts loaded shared library (.so) segments from a target process's address space and reconstructs valid ELF binaries with fixed headers for both 32-bit and 64-bit a"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mem-dumper
---

# MemDumper

**Author:** kp7742
**Source:** mcp-gamehacking/skills/ags-mem-dumper

## Description

Android memory dumping tool that extracts loaded shared library (.so) segments from a target process's address space and reconstructs valid ELF binaries with fixed headers for both 32-bit and 64-bit architectures, reading directly from /proc/pid/mem without ptrace to bypass basic anti-debugging protections.
