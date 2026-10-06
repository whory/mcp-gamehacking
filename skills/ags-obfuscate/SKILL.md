---
name: ags-obfuscate
description: "Obfuscate is a header-only C++14 library for compile-time string literal obfuscation."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-obfuscate
---

# Obfuscate

**Author:** adamyaxley
**Source:** mcp-gamehacking/skills/ags-obfuscate

## Description

Obfuscate is a header-only C++14 library for compile-time string literal obfuscation.
It encrypts literals with constexpr logic and randomized keys, then decrypts them at runtime when needed.
The API is intentionally simple, allowing developers to wrap strings with a macro and integrate it into existing code with minimal changes.
Its main use case is reducing trivial string extraction in reverse engineering and game security related binaries.
