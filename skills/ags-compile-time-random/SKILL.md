---
name: ags-compile-time-random
description: "This project provides a compile-time random number utility for C++11 code. It uses constexpr-based hashing and generator logic, including FNV and Murmur3 style operations, to produce deterministic val"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-compile-time-random
---

# CompileTimeRandom

**Author:** Deniskore
**Source:** mcp-gamehacking/skills/ags-compile-time-random

## Description

This project provides a compile-time random number utility for C++11 code. It uses constexpr-based hashing and generator logic, including FNV and Murmur3 style operations, to produce deterministic values during compilation. The header exposes macros for 32-bit and 64-bit compile-time random constants without runtime RNG calls. It is mainly useful for low-level tooling, lightweight obfuscation patterns, and game security research code that benefits from compile-time value generation.
