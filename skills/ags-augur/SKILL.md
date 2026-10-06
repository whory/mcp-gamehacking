---
name: ags-augur
description: "This project is a headless IDA Pro analysis assistant that extracts strings and related pseudocode from binaries. It is implemented in Rust with idalib bindings and decompilation helpers to process ta"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-augur
---

# augur

**Author:** 0xdea
**Source:** mcp-gamehacking/skills/ags-augur

## Description

This project is a headless IDA Pro analysis assistant that extracts strings and related pseudocode from binaries. It is implemented in Rust with idalib bindings and decompilation helpers to process targets supported by Hex-Rays. Output is organized into directories where each string maps to decompiled functions that reference it, making triage easier at scale. It is intended for reverse engineers and vulnerability researchers who need fast static analysis pipelines.
