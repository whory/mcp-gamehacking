---
name: ags-await-fuscator
description: "This project is a .NET binary-to-binary obfuscator that rewrites method bodies into long chains of await expressions."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-await-fuscator
---

# AwaitFuscator

**Author:** Washi1337
**Source:** mcp-gamehacking/skills/ags-await-fuscator

## Description

This project is a .NET binary-to-binary obfuscator that rewrites method bodies into long chains of await expressions.
It leverages custom awaiters and GetAwaiter or GetResult transformations to produce control flow that is harder for decompilers to reconstruct cleanly.
The implementation is in C# on .NET and ships as a command-line tool with sample programs for testing.
It is mainly a proof-of-concept for obfuscation research and reverse-engineering resistance experiments.
