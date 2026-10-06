---
name: ags-android-bpf-sys
description: "This project is a minimal Android eBPF example for monitoring kernel syscall events. It defines a BPF tracepoint program on raw_syscalls/sys_enter and stores observed PID and syscall identifiers in a "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-android-bpf-sys
---

# Android bpf sys

**Author:** PShocker
**Source:** mcp-gamehacking/skills/ags-android-bpf-sys

## Description

This project is a minimal Android eBPF example for monitoring kernel syscall events. It defines a BPF tracepoint program on raw_syscalls/sys_enter and stores observed PID and syscall identifiers in a BPF map. A companion C++ user-space tool attaches the program and reads map contents through Android bpf libraries. It is intended for low-level Android security monitoring and syscall behavior analysis.
