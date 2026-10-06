---
name: ags-stelf-loader
description: "stelf-loader is a research toolchain that converts Linux ELF executables into self loading shell scripts. It uses Python and generated NASM shellcode to map executable segments, restore memory protect"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-stelf-loader
---

# stelf loader

**Author:** DavidBuchanan314
**Source:** mcp-gamehacking/skills/ags-stelf-loader

## Description

stelf-loader is a research toolchain that converts Linux ELF executables into self loading shell scripts. It uses Python and generated NASM shellcode to map executable segments, restore memory protections, and jump to the original entry point from a script driven loader path. The output format supports compressed payloads, base64 transport, raw entry execution modes, and compact one liner generation. It is primarily useful for exploit development research, payload delivery experiments, and studying ELF runtime loading behavior.
