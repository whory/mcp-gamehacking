---
name: ags-binary-lens
description: "BinaryLens is an IDA Pro plugin that uses large language models to accelerate reverse engineering workflows. The plugin can rename functions at scale, explain binary logic, and rename local variables "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-binary-lens
---

# BinaryLens

**Author:** Berk000x
**Source:** mcp-gamehacking/skills/ags-binary-lens

## Description

BinaryLens is an IDA Pro plugin that uses large language models to accelerate reverse engineering workflows. The plugin can rename functions at scale, explain binary logic, and rename local variables directly from decompiler context. It is implemented in C++ with IDA SDK and OpenSSL integration, and supports multiple model backends for analysis tasks. The tool is aimed at analysts working on large binaries, including game client and anti-cheat reverse engineering use cases.
