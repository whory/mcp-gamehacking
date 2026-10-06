---
name: ags-xorstr
description: "This project is a C++17 compile-time string encryption library."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-xorstr
---

# xorstr

**Author:** JustasMasiulis
**Source:** mcp-gamehacking/skills/ags-xorstr

## Description

This project is a C++17 compile-time string encryption library.
It uses vectorized SSE or AVX operations and inline decryption helpers to keep usage lightweight in runtime code.
Its design tries to keep string data out of normal read-only data sections and generate keys during compilation.
It is widely used for obfuscation in security tooling, reverse engineering challenges, and game security experiments.
