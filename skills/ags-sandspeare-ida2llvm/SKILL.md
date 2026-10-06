---
name: ags-sandspeare-ida2llvm
description: "IDA2LLVM is a lifting tool that translates IDA microcode into LLVM IR for downstream analysis."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-sandspeare-ida2llvm
---

# ida2llvm

**Author:** Sandspeare
**Source:** mcp-gamehacking/skills/ags-sandspeare-ida2llvm

## Description

IDA2LLVM is a lifting tool that translates IDA microcode into LLVM IR for downstream analysis.
It is primarily implemented as a Python script using IDA APIs together with llvmlite and includes logic for mapping IDA types and structures to LLVM types.
The repository also provides sample binaries and generated IR examples to demonstrate translation outputs.
It is intended for reverse engineering research, binary analysis pipelines, and experiments that combine IDA decompilation artifacts with LLVM tooling.
