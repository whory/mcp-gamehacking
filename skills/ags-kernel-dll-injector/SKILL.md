---
name: ags-kernel-dll-injector
description: "This project is a kernel-mode DLL injector for Windows that injects a chosen DLL into newly created processes when kernel32 is loaded. The implementation is based on analysis of the Sirifef (Max++) ro"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-dll-injector
---

# Kernel dll injector

**Author:** alexkrnl
**Source:** mcp-gamehacking/skills/ags-kernel-dll-injector

## Description

This project is a kernel-mode DLL injector for Windows that injects a chosen DLL into newly created processes when kernel32 is loaded. The implementation is based on analysis of the Sirifef (Max++) rootkit technique and includes both driver and sample DLL components. It is developed in C/C++ with Visual Studio and WDK tooling and is documented as x86-focused. The repository is useful for studying kernel-assisted process injection and for defensive research on detecting or mitigating such behavior.
