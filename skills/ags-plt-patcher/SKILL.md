---
name: ags-plt-patcher
description: "PltPatcher is an IDA Pro plugin set that repairs Procedure Linkage Table entries when automatic analysis fails. It is written in Python with IDAPython APIs and currently targets ELF64 binaries. The pa"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-plt-patcher
---

# PltPatcher

**Author:** GAMMACASE
**Source:** mcp-gamehacking/skills/ags-plt-patcher

## Description

PltPatcher is an IDA Pro plugin set that repairs Procedure Linkage Table entries when automatic analysis fails. It is written in Python with IDAPython APIs and currently targets ELF64 binaries. The package also includes a thunk type preserver that keeps inferred argument types around extern thunks during decompilation. Its main use case is binary reverse engineering workflows where accurate PLT and thunk recovery is important, including game security research.
