---
name: ags-qbdi-tracer-android
description: "Android native code tracing framework built on QBDI (QuarkslaB Dynamic binary Instrumentation) and the Dobby inline hooking library. It intercepts shared library loading through Android linker hooks, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-qbdi-tracer-android
---

# qbdi tracer android

**Author:** g2wfw
**Source:** mcp-gamehacking/skills/ags-qbdi-tracer-android

## Description

Android native code tracing framework built on QBDI (QuarkslaB Dynamic binary Instrumentation) and the Dobby inline hooking library. It intercepts shared library loading through Android linker hooks, instruments target functions for per-instruction tracing with backtrace capture, and includes memory scanning and pattern-matching utilities. CMake toolchain files support cross-compilation for Android, iOS, and other ARM64 targets.
