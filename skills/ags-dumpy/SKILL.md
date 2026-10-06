---
name: ags-dumpy
description: "This project is a Rust-based memory dumping tool focused on obtaining LSASS dumps with reduced obvious detection signals."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dumpy
---

# Dumpy

**Author:** Kudaes
**Source:** mcp-gamehacking/skills/ags-dumpy

## Description

This project is a Rust-based memory dumping tool focused on obtaining LSASS dumps with reduced obvious detection signals.
Instead of directly opening LSASS, it enumerates and duplicates existing handles using native Windows object and system information APIs.
It supports XOR-protected dump output, optional HTTP upload, and a decryption mode for restoring the dumped data.
The implementation centers on Rust with low-level Windows API invocation patterns.
It is intended for controlled offensive security research and detection-evasion testing.
