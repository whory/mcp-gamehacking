---
name: ags-frida-seccomp
description: "This project is an Android syscall tracing and hooking solution built with Frida and seccomp trap handling. It combines JavaScript instrumentation with Python process orchestration to capture SVC call"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-frida-seccomp
---

# Frida Seccomp

**Author:** Abbbbbi
**Source:** mcp-gamehacking/skills/ags-frida-seccomp

## Description

This project is an Android syscall tracing and hooking solution built with Frida and seccomp trap handling. It combines JavaScript instrumentation with Python process orchestration to capture SVC calls, stack traces, register arguments, and return values, including multi-process logging support. The implementation uses linker symbol inspection and a Frida CModule to redirect and replay syscall behavior from a controlled thread context. It is aimed at mobile reverse engineering and game security analysis where low-level syscall visibility is needed.
