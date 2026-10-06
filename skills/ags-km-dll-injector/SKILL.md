---
name: ags-km-dll-injector
description: "This project is a kernel-mode DLL injection framework for Windows that targets processes during early startup stages. It supports callback-based triggering through process creation or image load notif"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-km-dll-injector
---

# KMDllInjector

**Author:** 0xPrimo
**Source:** mcp-gamehacking/skills/ags-km-dll-injector

## Description

This project is a kernel-mode DLL injection framework for Windows that targets processes during early startup stages. It supports callback-based triggering through process creation or image load notifications and demonstrates hooking ntdll loader routines with position-independent shellcode. It also includes an APC-based injection path from kernel mode for early user-mode execution timing. The codebase is written in C++ and is used for advanced process injection research in controlled security testing.
