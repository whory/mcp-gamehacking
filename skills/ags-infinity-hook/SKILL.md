---
name: ags-infinity-hook
description: "This project is a Windows kernel hooking library in C that intercepts system calls by manipulating ETW (Event Tracing for Windows) internal function pointers. It patches the ETW syscall trace callback"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-infinity-hook
---

# InfinityHook

**Author:** everdox
**Source:** mcp-gamehacking/skills/ags-infinity-hook

## Description

This project is a Windows kernel hooking library in C that intercepts system calls by manipulating ETW (Event Tracing for Windows) internal function pointers. It patches the ETW syscall trace callback pointer inside the kernel to redirect control flow, enabling transparent syscall interception without modifying the SSDT or inline patching ntoskrnl. The technique survives PatchGuard checks since it operates through a legitimate ETW code path. It is aimed at kernel researchers studying stealthy syscall hooking, anti-cheat bypasses, and PatchGuard-compatible kernel instrumentation.
