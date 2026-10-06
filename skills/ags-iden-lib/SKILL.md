---
name: ags-iden-lib
description: "This project is idenLib, an IDA Pro plugin for identifying statically linked library functions in stripped binaries. It matches function byte patterns against a database of known library signatures (s"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-iden-lib
---

# idenLib

**Author:** secrary
**Source:** mcp-gamehacking/skills/ags-iden-lib

## Description

This project is idenLib, an IDA Pro plugin for identifying statically linked library functions in stripped binaries. It matches function byte patterns against a database of known library signatures (similar to FLIRT but using a different matching approach) to recover function names from Visual C++ runtime, STL, and other commonly linked libraries. The C++ plugin helps rename unknown functions in stripped PE binaries. It is aimed at reverse engineers working with stripped Windows executables.
