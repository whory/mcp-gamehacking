---
name: ags-opaque-predicate-patcher
description: "This project is a Binary Ninja plugin that automatically removes opaque predicates from obfuscated binaries."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-opaque-predicate-patcher
---

# OpaquePredicatePatcher

**Author:** Vector35
**Source:** mcp-gamehacking/skills/ags-opaque-predicate-patcher

## Description

This project is a Binary Ninja plugin that automatically removes opaque predicates from obfuscated binaries.
It is implemented in Python and analyzes MLIL branch conditions to detect constant true or false paths.
The plugin then patches branch instructions to always or never branch and re-runs analysis in iterative passes.
It is designed for reverse engineers who need faster deobfuscation of protected or intentionally confusing code.
