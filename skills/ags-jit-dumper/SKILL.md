---
name: ags-jit-dumper
description: "This project is a Windows-focused toolchain for dumping .NET CIL method bodies by intercepting JIT compilation internals. It combines a C# analysis application with a C++ hook component that leverages"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-jit-dumper
---

# JitDumper

**Author:** Anonym0ose
**Source:** mcp-gamehacking/skills/ags-jit-dumper

## Description

This project is a Windows-focused toolchain for dumping .NET CIL method bodies by intercepting JIT compilation internals. It combines a C# analysis application with a C++ hook component that leverages Detours and symbol or PDB data. The implementation supports multiple .NET generations and reconstructs metadata needed to inspect compiled method behavior. It is aimed at reverse engineers and software-protection analysts working with managed code internals.
