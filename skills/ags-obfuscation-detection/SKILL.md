---
name: ags-obfuscation-detection
description: "Binary Ninja plugin that identifies obfuscated code regions using multiple heuristics: control flow flattening detection via loop analysis and dominator trees, instruction-level complexity metrics, n-"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-obfuscation-detection
---

# obfuscation detection

**Author:** mrphrazer
**Source:** mcp-gamehacking/skills/ags-obfuscation-detection

## Description

Binary Ninja plugin that identifies obfuscated code regions using multiple heuristics: control flow flattening detection via loop analysis and dominator trees, instruction-level complexity metrics, n-gram frequency analysis comparing basic blocks against a reference database, and statistical outlier detection. Includes batch processing scripts for large-scale binary analysis campaigns.
