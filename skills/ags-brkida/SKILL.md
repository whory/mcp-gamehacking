---
name: ags-brkida
description: "This project is a header-only C++ macro framework that intentionally breaks decompilation in Hex-Rays."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-brkida
---

# brkida

**Author:** Android1337
**Source:** mcp-gamehacking/skills/ags-brkida

## Description

This project is a header-only C++ macro framework that intentionally breaks decompilation in Hex-Rays.
It generates compile-time stubs and crafted stack-access patterns that cause decompiler failure for protected functions.
The implementation targets MSVC on x64 and provides a simple BRKIDA macro with example usage.
It is useful for software-protection and game anti-tamper experiments where analysts want to raise reverse-engineering cost.
