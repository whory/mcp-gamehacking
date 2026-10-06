---
name: ags-auto-resolv
description: "AutoResolv is an IDA plugin that resolves external library calls in ELF binaries and maps wrappers back to their real implementations. It is built with IDAPython and relies on PyQt5 and pyelftools to "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-auto-resolv
---

# AutoResolv

**Author:** airbus-seclab
**Source:** mcp-gamehacking/skills/ags-auto-resolv

## Description

AutoResolv is an IDA plugin that resolves external library calls in ELF binaries and maps wrappers back to their real implementations. It is built with IDAPython and relies on PyQt5 and pyelftools to provide an interactive workflow and cached analysis data. The tool can annotate call sites, list resolved library paths, and import function signatures from related binaries to improve decompilation accuracy. It is designed for reverse engineering tasks where analysts need faster understanding of dynamically linked code across multiple architectures.
