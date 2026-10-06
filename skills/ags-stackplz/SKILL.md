---
name: ags-stackplz
description: "This project is an Android-focused stack tracing and hook analysis tool built on eBPF. It combines a Go userland controller with eBPF C programs to trace syscalls, user-space probes, and hardware brea"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-stackplz
---

# stackplz

**Author:** SeeFlowerX
**Source:** mcp-gamehacking/skills/ags-stackplz

## Description

This project is an Android-focused stack tracing and hook analysis tool built on eBPF. It combines a Go userland controller with eBPF C programs to trace syscalls, user-space probes, and hardware breakpoints on arm64 systems. The tool can capture arguments, registers, and call stacks, and also supports filtering, structured output, and optional Frida RPC integration. It is aimed at mobile security and game protection research where deep runtime telemetry is needed on rooted devices.
