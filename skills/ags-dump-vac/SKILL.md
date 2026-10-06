---
name: ags-dump-vac
description: "This project is a proof-of-concept tool that intercepts and disables VAC module execution while dumping received modules."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dump-vac
---

# DumpVAC

**Author:** RenardDev
**Source:** mcp-gamehacking/skills/ags-dump-vac

## Description

This project is a proof-of-concept tool that intercepts and disables VAC module execution while dumping received modules.
It hooks relevant Steam and module-loading paths, then captures and decrypts module data for offline inspection.
The codebase is mainly C and C++ and includes auxiliary components such as detours and disassembly libraries.
It is aimed at anti-cheat reverse engineering research focused on understanding VAC module delivery and behavior.
