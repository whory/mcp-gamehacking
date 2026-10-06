---
name: ags-malstring
description: "This project is a header-only C++23 library for compile-time string and byte-array obfuscation."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-malstring
---

# malstring

**Author:** ManulMap
**Source:** mcp-gamehacking/skills/ags-malstring

## Description

This project is a header-only C++23 library for compile-time string and byte-array obfuscation.
It uses template metaprogramming to generate XOR-encrypted stack strings, call strings, and callable arrays while keeping source usage concise.
The implementation supports per-string keys and decrypt-on-use patterns to reduce obvious plaintext artifacts in binaries.
Its main audience is low-level security developers and reverse engineering researchers experimenting with static analysis resistance techniques.
