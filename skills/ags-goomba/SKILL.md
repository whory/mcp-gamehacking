---
name: ags-goomba
description: "This project is a Hex-Rays decompiler plugin for simplifying mixed Boolean-arithmetic obfuscation patterns."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-goomba
---

# goomba

**Author:** HexRaysSA
**Source:** mcp-gamehacking/skills/ags-goomba

## Description

This project is a Hex-Rays decompiler plugin for simplifying mixed Boolean-arithmetic obfuscation patterns.
It is primarily written in C++ and integrates directly into IDA Pro and Hex-Rays workflows.
The plugin combines algebraic heuristics, linear and non-linear MBA simplification, and optional fingerprint-oracle support.
It also uses the Z3 SMT solver to verify soundness, making it useful for reliable deobfuscation in reverse engineering.
