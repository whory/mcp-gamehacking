---
name: ags-dynre-x86
description: "This project is an early experimental codebase for learning dynamic recompilation concepts on x86. The implementation is in C++ and uses the Zydis disassembly library to decode instruction streams, pr"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dynre-x86
---

# dynre x86

**Author:** aroxby
**Source:** mcp-gamehacking/skills/ags-dynre-x86

## Description

This project is an early experimental codebase for learning dynamic recompilation concepts on x86. The implementation is in C++ and uses the Zydis disassembly library to decode instruction streams, print mnemonics, and inspect operand details. It includes a small build setup with Makefiles and a Dockerfile, plus helper tables for register-name mapping. The main use case is educational reverse-engineering practice for people studying instruction decoding and binary translation pipelines.
