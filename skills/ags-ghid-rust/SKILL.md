---
name: ags-ghid-rust
description: "This project is a Ghidra extension for analyzing Rust binaries and improving reverse engineering workflows. It adds Rust binary detection heuristics, integrates Function ID matching for common Rust st"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ghid-rust
---

# GhidRust

**Author:** DMaroo
**Source:** mcp-gamehacking/skills/ags-ghid-rust

## Description

This project is a Ghidra extension for analyzing Rust binaries and improving reverse engineering workflows. It adds Rust binary detection heuristics, integrates Function ID matching for common Rust standard library functions, and experiments with translating decompiled C-like output toward Rust-style code. The plugin is primarily implemented in Java and packaged as a standard Ghidra extension with supporting data assets. It is useful for reverse engineers dealing with stripped Rust executables, although the repository is in a paused maintenance state.
