---
name: ags-ghidra-minidump-loader
description: "This project is a Ghidra extension that loads Windows minidumps as analyzable programs."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ghidra-minidump-loader
---

# ghidra minidump loader

**Author:** Rantanen
**Source:** mcp-gamehacking/skills/ags-ghidra-minidump-loader

## Description

This project is a Ghidra extension that loads Windows minidumps as analyzable programs.
It maps dump modules to their runtime addresses, imports private memory and thread stacks, and stores thread metadata for analysis.
Built mainly in Java with Gradle, it extends PE loading internals and adds a thread-view workflow with stack-walking support.
It is aimed at reverse engineers and incident responders who need to inspect crash dumps or post-mortem malware samples inside Ghidra.
