---
name: ags-ida-rust-helper
description: "IDARustHelper is an IDA Pro plugin that improves analysis of Rust binaries."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-rust-helper
---

# IDARustHelper

**Author:** JANlittle
**Source:** mcp-gamehacking/skills/ags-ida-rust-helper

## Description

IDARustHelper is an IDA Pro plugin that improves analysis of Rust binaries.
Built in Python, it demangles Rust symbols, normalizes names for IDA compatibility, and adds common Rust type definitions.
It also includes architecture-aware string recovery helpers for x86, ARM, and RISC-V targets.
The tool is aimed at reverse engineers who need faster and cleaner navigation of Rust malware, game clients, or system binaries.
