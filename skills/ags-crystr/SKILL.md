---
name: ags-crystr
description: "This project is a C++20 compile-time string and number obfuscation library."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-crystr
---

# crystr

**Author:** Android1337
**Source:** mcp-gamehacking/skills/ags-crystr

## Description

This project is a C++20 compile-time string and number obfuscation library.
It encrypts literals with XOR-based keys derived from compile-time math, timestamps, and counters, then decrypts them at runtime through inline or virtual paths.
The code provides macros for strings and numeric constants and uses per-character and per-value key variation to reduce static pattern readability.
It is intended for anti-reversing and game security hardening scenarios where clear-text constants are easy extraction targets.
