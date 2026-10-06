---
name: ags-qiling-il2cpp-dump
description: "This project uses the Qiling emulation framework to dump IL2CPP metadata from Unity game binaries without running the actual game. It emulates the IL2CPP runtime initialization in Qiling's sandboxed e"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-qiling-il2cpp-dump
---

# qiling il2cpp dump

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-qiling-il2cpp-dump

## Description

This project uses the Qiling emulation framework to dump IL2CPP metadata from Unity game binaries without running the actual game. It emulates the IL2CPP runtime initialization in Qiling's sandboxed environment to trigger metadata registration, then extracts class definitions, method addresses, and type information. This approach works for analyzing obfuscated or anti-tamper protected IL2CPP games. It is aimed at Unity game reverse engineers analyzing heavily protected IL2CPP binaries through emulation-based dumping.
