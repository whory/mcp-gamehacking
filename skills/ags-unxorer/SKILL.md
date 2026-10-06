---
name: ags-unxorer
description: "unxorer is an IDA plugin for recovering stack strings from obfuscated binaries through emulation."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-unxorer
---

# unxorer

**Author:** SamuelTulach
**Source:** mcp-gamehacking/skills/ags-unxorer

## Description

unxorer is an IDA plugin for recovering stack strings from obfuscated binaries through emulation.
The plugin is implemented in C++ and uses Unicorn to explore branching paths, preserve emulation state, and scan stack data for decoded text.
It integrates directly into IDA workflows with configurable starting points and output navigation for discovered strings.
This makes it useful for reverse engineering tasks in malware and game security analysis where stack-string obfuscation is common.
