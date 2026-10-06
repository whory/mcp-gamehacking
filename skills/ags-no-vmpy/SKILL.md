---
name: ags-no-vmpy
description: "This project is NoVmpy, a Python tool for deobfuscating VMProtect-virtualized code using symbolic execution. It traces through VMProtect's virtual machine handler chains, symbolically executes each ha"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-no-vmpy
---

# NoVmpy

**Author:** wallds
**Source:** mcp-gamehacking/skills/ags-no-vmpy

## Description

This project is NoVmpy, a Python tool for deobfuscating VMProtect-virtualized code using symbolic execution. It traces through VMProtect's virtual machine handler chains, symbolically executes each handler to extract its semantics, and reconstructs the original instruction sequence from the virtualized bytecode. The tool leverages Triton or similar symbolic execution frameworks for analysis. It is aimed at reverse engineers and malware analysts recovering original code from VMProtect-protected binaries.
