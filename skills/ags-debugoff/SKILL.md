---
name: ags-debugoff
description: "This project is a Rust library for Linux anti-analysis and anti-debugging experiments."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-debugoff
---

# debugoff

**Author:** 0xor0ne
**Source:** mcp-gamehacking/skills/ags-debugoff

## Description

This project is a Rust library for Linux anti-analysis and anti-debugging experiments.
It implements direct syscalls without libc dependencies and adds syscall-level obfuscation to make static analysis harder.
It also performs chained and randomized ptrace-based checks that validate expected behavior and terminate execution when tampering is detected.
Its main use case is security research on hardening binaries against reverse engineering in Linux environments.
