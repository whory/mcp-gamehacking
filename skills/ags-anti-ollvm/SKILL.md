---
name: ags-anti-ollvm
description: "AntiOllvm is an Arm64 simulated execution framework for removing OLLVM control-flow flattening. It identifies dispatcher patterns and reconstructs complete if-else control-flow graphs from obfuscated "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-anti-ollvm
---

# AntiOllvm

**Author:** IIIImmmyyy
**Source:** mcp-gamehacking/skills/ags-anti-ollvm

## Description

AntiOllvm is an Arm64 simulated execution framework for removing OLLVM control-flow flattening. It identifies dispatcher patterns and reconstructs complete if-else control-flow graphs from obfuscated functions. The core tool is written in C#, with companion Python scripts for IDA CFG extraction, machine-code generation via Keystone, and CFG rebuilding. It is primarily for reverse engineers analyzing obfuscated binaries in security and game-protection research.
