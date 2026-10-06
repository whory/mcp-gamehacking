---
name: ags-stealthy-kernelmode-injector
description: "This project is a Windows kernel-mode DLL injector that uses stealthy techniques to inject DLLs into target processes from kernel space. It employs methods such as APC injection, thread hijacking, or "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-stealthy-kernelmode-injector
---

# Stealthy Kernelmode Injector

**Author:** charliewolfe
**Source:** mcp-gamehacking/skills/ags-stealthy-kernelmode-injector

## Description

This project is a Windows kernel-mode DLL injector that uses stealthy techniques to inject DLLs into target processes from kernel space. It employs methods such as APC injection, thread hijacking, or image load callbacks while implementing anti-detection measures like removing injection traces from PEB module lists and cleaning up allocated memory metadata. The C driver demonstrates injection techniques designed to evade anti-cheat detection. It is aimed at kernel researchers studying stealthy injection methods and their detection vectors.
