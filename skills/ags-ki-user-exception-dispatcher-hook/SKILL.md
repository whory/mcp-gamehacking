---
name: ags-ki-user-exception-dispatcher-hook
description: "This project hooks KiUserExceptionDispatcher, the initial user-mode exception dispatcher called from the kernel, by modifying the Wow64PrepareForException function pointer stored in ntdll's .mrdata se"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ki-user-exception-dispatcher-hook
---

# KiUserExceptionDispatcherHook

**Author:** brew02
**Source:** mcp-gamehacking/skills/ags-ki-user-exception-dispatcher-hook

## Description

This project hooks KiUserExceptionDispatcher, the initial user-mode exception dispatcher called from the kernel, by modifying the Wow64PrepareForException function pointer stored in ntdll's .mrdata section.
It uses LdrProtectMrdata to unlock the protected MRDATA section and Zydis disassembler for dynamically locating the target function pointers within ntdll.
The C++ implementation demonstrates an alternative exception handler hooking technique that avoids traditional VEH chain manipulation.
It is mainly useful for Windows kernel and anti-cheat researchers studying user-mode exception dispatching internals and stealthy hook installation methods.
