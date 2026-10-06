---
name: ags-flutter-re-demo
description: "This repository provides scripts and sample materials to reproduce research experiments on reverse engineering Flutter mobile applications. It includes Python tooling for IDA Pro that parses reFlutter"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-flutter-re-demo
---

# flutter re demo

**Author:** Guardsquare
**Source:** mcp-gamehacking/skills/ags-flutter-re-demo

## Description

This repository provides scripts and sample materials to reproduce research experiments on reverse engineering Flutter mobile applications. It includes Python tooling for IDA Pro that parses reFlutter or DWARF debug output, renames Dart functions, imports Flutter VM memory dumps, creates Dart object structures, adds cross-references, and improves decompilation via stack pointer patching and microcode hooks. A Frida script captures runtime Flutter memory, and sample obfuscated and non-obfuscated APKs from a Flutter game support hands-on testing. The project is aimed at security researchers studying Flutter app protection, Dart decompilation challenges, and the limits of obfuscation against static and dynamic analysis.
