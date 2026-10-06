---
name: ags-mandibule
description: "This project is a Linux process injection tool that uses ptrace to inject and execute arbitrary ELF binaries inside a running target process. The C codebase includes a minimal C runtime (icrt) with ra"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mandibule
---

# mandibule

**Author:** ixty
**Source:** mcp-gamehacking/skills/ags-mandibule

## Description

This project is a Linux process injection tool that uses ptrace to inject and execute arbitrary ELF binaries inside a running target process. The C codebase includes a minimal C runtime (icrt) with raw syscall wrappers, ELF loading and relocation handling, fake stack construction, and shellcode argument passing for position-independent injection payloads. It is mainly useful for Linux security researchers studying ptrace-based process injection and runtime ELF loading techniques.
