---
name: ags-syscall-detect
description: "This project is a Windows proof of concept for detecting direct and indirect syscall invocations from user mode. It uses the instrumentation callback or thread stack inspection to determine whether a "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-syscall-detect
---

# syscall detect

**Author:** jackullrich
**Source:** mcp-gamehacking/skills/ags-syscall-detect

## Description

This project is a Windows proof of concept for detecting direct and indirect syscall invocations from user mode. It uses the instrumentation callback or thread stack inspection to determine whether a syscall originated from ntdll (normal) or from a custom stub (suspicious), flagging potential syscall hooking evasion. The C implementation demonstrates detection heuristics that anti-cheat and EDR products can use. It is aimed at defensive security researchers studying direct syscall detection and user-mode integrity monitoring.
