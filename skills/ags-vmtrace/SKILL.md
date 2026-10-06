---
name: ags-vmtrace
description: "C++ library built on the Windows Hypervisor Platform (WHP) API that provides trap-driven guest execution with host-backed memory, page-level access traps, and CPUID/syscall interception. Uses asmjit f"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vmtrace
---

# vmtrace

**Author:** momo5502
**Source:** mcp-gamehacking/skills/ags-vmtrace

## Description

C++ library built on the Windows Hypervisor Platform (WHP) API that provides trap-driven guest execution with host-backed memory, page-level access traps, and CPUID/syscall interception. Uses asmjit for runtime code generation and exposes a clean interface for mapping guest physical memory, setting memory permissions, and handling VM exits for single-step tracing.
