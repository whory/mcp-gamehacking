---
name: ags-limelighter
description: "This project is a Go command-line tool for generating and using code-signing certificates on Windows binaries. It can build spoofed certificate material from domain certificate metadata, package keys "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-limelighter
---

# Limelighter

**Author:** Tylous
**Source:** mcp-gamehacking/skills/ags-limelighter

## Description

This project is a Go command-line tool for generating and using code-signing certificates on Windows binaries. It can build spoofed certificate material from domain certificate metadata, package keys into PFX files, and sign executables or DLLs through external signing utilities. The tool also supports signing with existing valid certificates when provided by the operator. Its main use case is red-team style signing experiments and defensive research into trust and EDR detection behavior.
