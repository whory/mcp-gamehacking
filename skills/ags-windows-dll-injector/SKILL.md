---
name: ags-windows-dll-injector
description: "This project demonstrates several DLL injection techniques for 32-bit and 64-bit Windows targets."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-windows-dll-injector
---

# Windows DLL Injector

**Author:** KooroshRZ
**Source:** mcp-gamehacking/skills/ags-windows-dll-injector

## Description

This project demonstrates several DLL injection techniques for 32-bit and 64-bit Windows targets.
It implements methods such as CreateRemoteThread, native thread creation variants, QueueUserAPC, SetWindowsHookEx, and RtlCreateUserThread.
The implementation is written in C++ and organized into injector and payload DLL projects for Visual Studio.
It highlights practical trade-offs between implementation simplicity, process compatibility, and detection surface.
It is mainly used for process injection research and low-level Windows API experimentation.
