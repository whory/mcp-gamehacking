---
name: ags-pdblister
description: "Rust command-line tool that generates PDB download manifests by scanning directories for PE files and extracting their debug directory entries (CodeView GUID and age). Mimics the behavior of symchk /o"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pdblister
---

# pdblister

**Author:** microsoft
**Source:** mcp-gamehacking/skills/ags-pdblister

## Description

Rust command-line tool that generates PDB download manifests by scanning directories for PE files and extracting their debug directory entries (CodeView GUID and age). Mimics the behavior of symchk /om but operates significantly faster, constructing Microsoft Symbol Server URLs for batch PDB retrieval with both blocking and async download modes.
