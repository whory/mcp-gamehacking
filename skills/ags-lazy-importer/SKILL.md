---
name: ags-lazy-importer
description: "This project is a header-only C++ lazy importer for resolving modules and API exports at runtime."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-lazy-importer
---

# lazy importer

**Author:** JustasMasiulis
**Source:** mcp-gamehacking/skills/ags-lazy-importer

## Description

This project is a header-only C++ lazy importer for resolving modules and API exports at runtime.
It is designed to avoid static import table entries, avoid plaintext strings, and keep generated code very small.
The library supports safe, cached, and forwarded resolution modes, and randomizes hashes per build.
It is commonly used in reverse engineering resistant tooling and game security research.
