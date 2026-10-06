---
name: ags-de-obf-br
description: "This project is a Python tool for deobfuscating ARM64 branch-obfuscated code in shared libraries."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-de-obf-br
---

# DeObfBR

**Author:** Mrack
**Source:** mcp-gamehacking/skills/ags-de-obf-br

## Description

This project is a Python tool for deobfuscating ARM64 branch-obfuscated code in shared libraries.
It uses Unicorn for emulation together with Capstone, Keystone, and ELF parsing utilities to analyze and patch control flow.
The workflow accepts function start and end addresses, processes obfuscated regions, and writes reconstructed output binaries.
Its primary use case is reverse engineering and malware or game protection analysis on Android native libraries.
