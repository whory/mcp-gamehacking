---
name: ags-levo
description: "Experimental ahead-of-time (AOT) binary translator that recovers control flow graphs from x86/x64 PE executables using Ghidra export, lifts machine code to LLVM IR via Intel XED disassembly, and recom"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-levo
---

# levo

**Author:** momo5502
**Source:** mcp-gamehacking/skills/ags-levo

## Description

Experimental ahead-of-time (AOT) binary translator that recovers control flow graphs from x86/x64 PE executables using Ghidra export, lifts machine code to LLVM IR via Intel XED disassembly, and recompiles to native code with the LLVM backend. Includes a PE mapper and a runtime environment that intercepts kernel32 API calls for execution on the host OS.
