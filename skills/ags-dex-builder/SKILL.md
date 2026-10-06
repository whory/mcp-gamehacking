---
name: ags-dex-builder
description: "DexBuilder is a C++ library for programmatically constructing DEX bytecode structures as an alternative to dexmaker-style generation."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dex-builder
---

# DexBuilder

**Author:** LSPosed
**Source:** mcp-gamehacking/skills/ags-dex-builder

## Description

DexBuilder is a C++ library for programmatically constructing DEX bytecode structures as an alternative to dexmaker-style generation.
It is largely derived from AOSP components and includes LSPosed-specific modifications for runtime integration scenarios.
The codebase focuses on the instruction coverage needed by its primary users rather than implementing every opcode path.
It is useful for Android framework researchers and tooling developers who need native-side DEX generation.
