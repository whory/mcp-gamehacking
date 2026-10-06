---
name: ags-obfuscation-methods
description: "This project is a C# collection of .NET assembly obfuscation and protection techniques for making managed code harder to reverse-engineer. It provides many modular protections such as control-flow obf"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-obfuscation-methods
---

# ObfuscationMethods

**Author:** nak0823
**Source:** mcp-gamehacking/skills/ags-obfuscation-methods

## Description

This project is a C# collection of .NET assembly obfuscation and protection techniques for making managed code harder to reverse-engineer. It provides many modular protections such as control-flow obfuscation, anti-dump and method hiding, anti-de4dot/dnSpy/ildasm defenses, renaming, integer and string encryption, proxies, mutation, junk code, invalid metadata/opcodes, and related tricks. The implementations are written in C# and rely on the dnlib library to load, rewrite, and save assemblies. It is aimed at developers and reverse engineers who want to study or apply .NET obfuscation for software protection and anti-analysis use cases.
