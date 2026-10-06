---
name: ags-limba
description: "This project is a proof-of-concept for compile-time control-flow obfuscation using mixed boolean-arithmetic transformations."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-limba
---

# limba

**Author:** ThatLing
**Source:** mcp-gamehacking/skills/ags-limba

## Description

This project is a proof-of-concept for compile-time control-flow obfuscation using mixed boolean-arithmetic transformations.
It generates boilerplate that hides real call targets by encoding jump addresses with randomized rewrite rules and offsets per build.
The implementation is C++20-focused and favors Clang/clang-cl toolchains, with premake-based examples for integration.
It is intended for reverse-engineering resistance research and binary obfuscation experimentation.
