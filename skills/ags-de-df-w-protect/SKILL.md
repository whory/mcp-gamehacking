---
name: ags-de-df-w-protect
description: "WProtect is a Windows executable protection project that virtualizes selected native code blocks into a custom virtual machine format. The codebase disassembles target instructions, builds VM bytecode"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-de-df-w-protect
---

# WProtect

**Author:** DeDf
**Source:** mcp-gamehacking/skills/ags-de-df-w-protect

## Description

WProtect is a Windows executable protection project that virtualizes selected native code blocks into a custom virtual machine format. The codebase disassembles target instructions, builds VM bytecode, redirects original code with jump stubs, and appends a new PE section that stores transformed logic and runtime tables. It is implemented mainly in C++ and integrates components such as AsmJit, udis86, and custom PE parsing and rewriting utilities. The project is primarily aimed at software protection research, reverse engineering practice, and analysis of VM based anti tamper techniques.
