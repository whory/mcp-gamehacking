---
name: ags-iat-obfuscation
description: "This project is a Windows PE import obfuscation tool that makes static API sequence analysis more difficult."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-iat-obfuscation
---

# IAT Obfuscation

**Author:** MahmoudZohdy
**Source:** mcp-gamehacking/skills/ags-iat-obfuscation

## Description

This project is a Windows PE import obfuscation tool that makes static API sequence analysis more difficult.
It is written in C++ and rewrites Import Address Table entries by swapping imported functions within the same DLL.
A companion TLS-based header is used to restore correct import behavior at runtime before the program's main logic executes.
The main use case is educational security research into import-hiding techniques and their impact on malware analysis workflows.
