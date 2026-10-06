---
name: ags-cdong1012-ollvm-unflattener
description: "This project is a Python tool that deobfuscates control flow flattening applied by OLLVM (Obfuscator-LLVM) using the Miasm symbolic execution framework."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cdong1012-ollvm-unflattener
---

# ollvm unflattener

**Author:** cdong1012
**Source:** mcp-gamehacking/skills/ags-cdong1012-ollvm-unflattener

## Description

This project is a Python tool that deobfuscates control flow flattening applied by OLLVM (Obfuscator-LLVM) using the Miasm symbolic execution framework.
It reconstructs original control flow by identifying and connecting basic blocks, supports multi-layered deobfuscation through BFS-based call following, and generates deobfuscated binaries for both Windows and Linux on x86 and x64 architectures.
Unlike static approaches, the tool uses Miasm's symbolic execution engine to dynamically recover the original program flow from the flattened state-variable dispatch structure.
It is mainly useful for reverse engineers and deobfuscation researchers studying OLLVM control flow flattening recovery techniques.
