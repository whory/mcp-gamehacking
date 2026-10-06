---
name: ags-crycall
description: "This project is a compile-time C++ call obfuscation library for hiding function invocations."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-crycall
---

# crycall

**Author:** Android1337
**Source:** mcp-gamehacking/skills/ags-crycall

## Description

This project is a compile-time C++ call obfuscation library for hiding function invocations.
It wraps calls through lambda and virtual-dispatch style machinery so the real callee and argument flow are harder to recover.
The header-based implementation supports C++14+, includes macros for normal and virtual calls, and is designed to work with obfuscation-focused compiler settings.
It is mainly aimed at anti-reversing and game protection research where call-site clarity is a detection or analysis risk.
