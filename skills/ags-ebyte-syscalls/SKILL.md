---
name: ags-ebyte-syscalls
description: "This project is a header-only C++ library for performing direct and indirect Windows syscalls without relying on standard API imports. It resolves syscall numbers at runtime by walking the PEB loader "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ebyte-syscalls
---

# Ebyte Syscalls

**Author:** EvilBytecode
**Source:** mcp-gamehacking/skills/ags-ebyte-syscalls

## Description

This project is a header-only C++ library for performing direct and indirect Windows syscalls without relying on standard API imports. It resolves syscall numbers at runtime by walking the PEB loader data structures and parsing ntdll export tables, supporting techniques like indirect syscall trampolines for EDR evasion. It is mainly useful for offensive security researchers and anti-cheat analysts studying syscall-level API hooking bypass and detection strategies.
