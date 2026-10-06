---
name: ags-binary-ninja-plugins
description: "This project is a collection of Binary Ninja architecture plugins for analyzing Java class files, Renesas H8/300 binaries, and Xtensa ELF targets."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-binary-ninja-plugins
---

# BinaryNinjaPlugins

**Author:** Pusty
**Source:** mcp-gamehacking/skills/ags-binary-ninja-plugins

## Description

This project is a collection of Binary Ninja architecture plugins for analyzing Java class files, Renesas H8/300 binaries, and Xtensa ELF targets.
It is written mainly in Python and includes disassembly, instruction decoding, and partial lifting support for custom architectures.
The Java-focused module also supports patch-oriented workflows such as NOPing instructions and changing branch logic.
It is intended for reverse engineers who need fast extension support in Binary Ninja for firmware and bytecode analysis.
