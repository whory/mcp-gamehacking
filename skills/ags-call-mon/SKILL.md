---
name: ags-call-mon
description: "This project is a Windows system call monitoring tool built from a kernel driver and a user-mode GUI. It uses PsAltSystemCallHandlers to intercept syscalls from selected processes and forwards trap fr"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-call-mon
---

# CallMon

**Author:** DownWithUp
**Source:** mcp-gamehacking/skills/ags-call-mon

## Description

This project is a Windows system call monitoring tool built from a kernel driver and a user-mode GUI. It uses PsAltSystemCallHandlers to intercept syscalls from selected processes and forwards trap frame and stack data through a named pipe. The repository includes a C implementation and an optional Rust driver variant for experimentation. Its main use case is kernel telemetry, syscall behavior analysis, and anti-cheat research on process-level API monitoring.
