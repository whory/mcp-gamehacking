---
name: ags-patch-finder
description: "IDA Pro plugin that detects in-memory patches and hooks by scanning executable memory regions of a running process and comparing them byte-by-byte against the corresponding on-disk PE file. Uses the I"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-patch-finder
---

# patch finder

**Author:** momo5502
**Source:** mcp-gamehacking/skills/ags-patch-finder

## Description

IDA Pro plugin that detects in-memory patches and hooks by scanning executable memory regions of a running process and comparing them byte-by-byte against the corresponding on-disk PE file. Uses the IDA SDK for segment enumeration and a custom PE parser to align virtual addresses with file offsets, highlighting discrepancies in the disassembly view.
