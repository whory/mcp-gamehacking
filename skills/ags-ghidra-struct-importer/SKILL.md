---
name: ags-ghidra-struct-importer
description: "This project is a Ghidra script that imports individual C structs even when they depend on previously defined types. It works around limitations of Ghidra's Parse C Source flow by parsing targeted str"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ghidra-struct-importer
---

# ghidra struct importer

**Author:** Katharsas
**Source:** mcp-gamehacking/skills/ags-ghidra-struct-importer

## Description

This project is a Ghidra script that imports individual C structs even when they depend on previously defined types. It works around limitations of Ghidra's Parse C Source flow by parsing targeted structures directly and resolving dependencies in a more practical way for iterative reversing. The implementation is written in Java as Ghidra scripting code and is designed for modern Ghidra versions. It is useful for reverse engineering and game security analysis when reconstructing data layouts from SDK leaks or decompiled headers.
