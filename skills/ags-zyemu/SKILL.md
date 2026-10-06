---
name: ags-zyemu
description: "This project is a work-in-progress x86-64 user-mode emulator that uses JIT-generated handlers instead of a purely interpreted execution model. It is written in modern C++ and relies on Zydis for instr"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-zyemu
---

# zyemu

**Author:** ZehMatt
**Source:** mcp-gamehacking/skills/ags-zyemu

## Description

This project is a work-in-progress x86-64 user-mode emulator that uses JIT-generated handlers instead of a purely interpreted execution model. It is written in modern C++ and relies on Zydis for instruction decoding and encoding support. The repository includes emulator core components such as code generation, code caching, CPU and memory logic, plus playground and test targets. It is intended for low-level emulation, binary analysis, and advanced reverse engineering research.
