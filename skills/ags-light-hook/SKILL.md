---
name: ags-light-hook
description: "This project is a single-header, minimalistic hook library for x86-64 systems that supports Windows, Linux, and EFI environments."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-light-hook
---

# LightHook

**Author:** SamuelTulach
**Source:** mcp-gamehacking/skills/ags-light-hook

## Description

This project is a single-header, minimalistic hook library for x86-64 systems that supports Windows, Linux, and EFI environments.
It is written in pure C with no heavy disassembler dependency and includes examples for user mode, kernel mode, and firmware contexts.
The library emphasizes portability and small integration overhead through platform-specific memory allocate, protect, and free shims.
It is intended for low-level instrumentation, reverse engineering, and game security research where lightweight hooking is preferred.
