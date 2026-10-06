---
name: ags-sloader
description: "sloader is an alternative ELF dynamic loader that aims to replace ld-linux.so for educational and experimental purposes. The project is written in modern C++ and focuses on implementing library loadin"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-sloader
---

# sloader

**Author:** akawashiro
**Source:** mcp-gamehacking/skills/ags-sloader

## Description

sloader is an alternative ELF dynamic loader that aims to replace ld-linux.so for educational and experimental purposes. The project is written in modern C++ and focuses on implementing library loading and symbol resolution in a more readable codebase than glibc internals. It includes build and test infrastructure, custom glibc testing workflows, and documentation about loader design trade-offs and current limitations. The primary use case is systems and security research on Linux program loading behavior, linker internals, and low-level runtime mechanics.
