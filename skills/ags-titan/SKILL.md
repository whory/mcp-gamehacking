---
name: ags-titan
description: "This project is a VMProtect devirtualizer that lifts virtualized code into analyzable LLVM-oriented output. It uses Triton for emulation and symbolic execution, identifies VM handlers through AST patt"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-titan
---

# titan

**Author:** archercreat
**Source:** mcp-gamehacking/skills/ags-titan

## Description

This project is a VMProtect devirtualizer that lifts virtualized code into analyzable LLVM-oriented output. It uses Triton for emulation and symbolic execution, identifies VM handlers through AST pattern matching, and reconstructs control-flow structure from virtual execution. The toolchain includes custom optimization passes and workflows around intrinsics and virtual entry-point analysis. It is intended for reverse engineering research on protected binaries, including anti-cheat and software protection studies.
