---
name: ags-msrexec
description: "This project is a C++ library that escalates arbitrary MSR (Model Specific Register) write primitives to full kernel code execution on Windows. It leverages LSTAR MSR overwrites to redirect the syscal"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-msrexec
---

# msrexec

**Author:** backengineering
**Source:** mcp-gamehacking/skills/ags-msrexec

## Description

This project is a C++ library that escalates arbitrary MSR (Model Specific Register) write primitives to full kernel code execution on Windows. It leverages LSTAR MSR overwrites to redirect the syscall handler entry point, allowing controlled kernel shellcode execution from user mode. The library integrates with VDM (Voyager) and bluepill backends for obtaining the initial MSR write capability. It is aimed at low-level security researchers studying MSR-based kernel exploitation and privilege escalation techniques.
