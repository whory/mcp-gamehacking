---
name: ags-unwinder
description: "This project is a Rust implementation of call stack spoofing techniques inspired by SilentMoonWalk."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-unwinder
---

# Unwinder

**Author:** Kudaes
**Source:** mcp-gamehacking/skills/ags-unwinder

## Description

This project is a Rust implementation of call stack spoofing techniques inspired by SilentMoonWalk.
It provides macros for invoking regular functions and indirect syscalls while maintaining stable spoofed stack traces.
The crate supports argument passing, return-value capture, and repeated chained spoofing without linear stack growth.
It combines Rust code with assembly helpers to control low-level execution flow on Windows.
Its primary use case is low-level offensive security research focused on call-stack evasion techniques.
