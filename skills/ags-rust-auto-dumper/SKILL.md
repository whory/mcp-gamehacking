---
name: ags-rust-auto-dumper
description: "This project is a C++ auto-dumping and parsing pipeline for the game Rust. It monitors Steam build IDs, executes dump scripts, and parses generated dump.cs and script data with regex-based extraction."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rust-auto-dumper
---

# rust auto dumper

**Author:** Akandesh
**Source:** mcp-gamehacking/skills/ags-rust-auto-dumper

## Description

This project is a C++ auto-dumping and parsing pipeline for the game Rust. It monitors Steam build IDs, executes dump scripts, and parses generated dump.cs and script data with regex-based extraction. The tool then emits structured outputs such as JSON, C++ headers, and C# constants, including variants for encrypted fields. It is mainly used by game security researchers and tooling developers who need synchronized Rust offset data in multiple formats.
