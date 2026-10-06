---
name: ags-rust-obfuscator
description: "A set of Rust source code obfuscation tools including an automatic obfuscator that inserts procedural macros for string literal encryption, control flow flattening, and symbol renaming across Rust pro"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rust-obfuscator
---

# rust obfuscator

**Author:** dronavallipranav
**Source:** mcp-gamehacking/skills/ags-rust-obfuscator

## Description

A set of Rust source code obfuscation tools including an automatic obfuscator that inserts procedural macros for string literal encryption, control flow flattening, and symbol renaming across Rust projects.
It provides the cryptify proc-macro crate for fine-grained compile-time string encryption and the labyrinth_macros crate for control flow obfuscation at the source level.
It is mainly useful for security researchers and Rust developers studying source-level obfuscation techniques and protecting Rust binaries against static analysis.
