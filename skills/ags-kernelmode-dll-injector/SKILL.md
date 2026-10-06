---
name: ags-kernelmode-dll-injector
description: "This project is a kernel-mode DLL injector that uses kdmapper with an Intel vulnerable driver to load a custom kernel driver, then performs manual DLL mapping into target processes from kernel space. "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernelmode-dll-injector
---

# Kernelmode DLL Injector

**Author:** YouNeverKnow00
**Source:** mcp-gamehacking/skills/ags-kernelmode-dll-injector

## Description

This project is a kernel-mode DLL injector that uses kdmapper with an Intel vulnerable driver to load a custom kernel driver, then performs manual DLL mapping into target processes from kernel space. The C++ codebase includes PE section mapping, import resolution, TLS callback handling, and user-kernel communication through IOCTL operations. It is mainly useful for game security researchers studying kernel-assisted DLL injection, manual mapping techniques, and vulnerable driver exploitation for process manipulation.
