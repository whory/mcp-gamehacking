---
name: ags-wsb-detect
description: "wsb-detect is a C library and sample program for detecting whether code is running inside Windows Sandbox."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-wsb-detect
---

# wsb detect

**Author:** LloydLabs
**Source:** mcp-gamehacking/skills/ags-wsb-detect

## Description

wsb-detect is a C library and sample program for detecting whether code is running inside Windows Sandbox.
It implements multiple fingerprinting checks such as sandbox-specific processes, usernames, device paths, DNS suffixes, registry artifacts, and timing clues.
The project exposes modular detection functions that can be combined depending on false-positive tolerance.
Its main use case is anti-analysis research and environment awareness for malware studies, red-team simulation, and defensive countermeasure testing.
