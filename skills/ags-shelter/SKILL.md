---
name: ags-shelter
description: "This project is a Rust crate for sleep obfuscation that encrypts in-memory payloads and resumes execution through ROP."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-shelter
---

# Shelter

**Author:** Kudaes
**Source:** mcp-gamehacking/skills/ags-shelter

## Description

This project is a Rust crate for sleep obfuscation that encrypts in-memory payloads and resumes execution through ROP.
It includes AES-128 support, whole-PE encryption capability, and temporary removal of execution permissions while sleeping.
The design avoids timer and APC-heavy patterns and integrates stack spoofing and indirect syscall techniques for stealth-focused execution control.
Core implementation uses Rust with assembly stubs for low-level behavior.
It is mainly used for advanced red-team tooling research and in-memory evasion experimentation.
