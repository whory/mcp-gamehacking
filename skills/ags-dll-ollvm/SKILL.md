---
name: ags-dll-ollvm
description: "LLVMObfuscationx is an LLVM 18 New Pass Manager plugin that obfuscates Windows binaries at the intermediate representation stage before code generation. Written in C++, it integrates into a clang, opt"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dll-ollvm
---

# dll ollvm

**Author:** R7flex
**Source:** mcp-gamehacking/skills/ags-dll-ollvm

## Description

LLVMObfuscationx is an LLVM 18 New Pass Manager plugin that obfuscates Windows binaries at the intermediate representation stage before code generation. Written in C++, it integrates into a clang, opt, and llc toolchain to apply instruction substitution, bogus control flow, control-flow flattening, and size-trimming passes that strip global constructors for manual-map compatibility. The preset tess-obf pipeline runs these transforms in sequence, with per-function annotation markers to skip, protect, or force obfuscation on selected code. It is designed and tested for manually mapped DLLs used in injection scenarios where CRT startup and global initializers are not run, making it suited to game security, anti-cheat, and reverse-engineering hardening workflows.
