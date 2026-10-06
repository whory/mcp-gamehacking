---
name: ags-un-sign
description: "This project is a command-line utility for removing Authenticode signatures from Windows PE files such as EXE, DLL, and SYS binaries."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-un-sign
---

# UnSign

**Author:** SV-Foster
**Source:** mcp-gamehacking/skills/ags-un-sign

## Description

This project is a command-line utility for removing Authenticode signatures from Windows PE files such as EXE, DLL, and SYS binaries.
It is implemented in C and provides 32-bit and 64-bit builds along with source code and Visual Studio project files.
The tool strips signature-related data and addresses PE header edge cases that can interfere with re-signing workflows.
It is mainly aimed at reverse engineering, malware analysis, and software security testing scenarios that require unsigned binary manipulation.
