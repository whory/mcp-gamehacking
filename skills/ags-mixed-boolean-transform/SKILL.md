---
name: ags-mixed-boolean-transform
description: "Source-to-source C++ obfuscation tool that replaces integer constants and arithmetic expressions with semantically equivalent mixed boolean-arithmetic (MBA) expressions using Z3 SMT solver verificatio"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mixed-boolean-transform
---

# mixed boolean transform

**Author:** mizt0
**Source:** mcp-gamehacking/skills/ags-mixed-boolean-transform

## Description

Source-to-source C++ obfuscation tool that replaces integer constants and arithmetic expressions with semantically equivalent mixed boolean-arithmetic (MBA) expressions using Z3 SMT solver verification. Generates large polynomial MBA identities over bitwise operations (AND, OR, XOR, NOT) with Eigen3 linear algebra and GMP arbitrary-precision integers.
