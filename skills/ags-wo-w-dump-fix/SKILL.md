---
name: ags-wo-w-dump-fix
description: "WoWDumpFix is an x64dbg plugin that removes anti-dumping obstacles from protected Blizzard game processes."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-wo-w-dump-fix
---

# WoWDumpFix

**Author:** adde88
**Source:** mcp-gamehacking/skills/ags-wo-w-dump-fix

## Description

WoWDumpFix is an x64dbg plugin that removes anti-dumping obstacles from protected Blizzard game processes.
It is written in C and C++ and is designed to be used with Scylla for import reconstruction and dump fixing.
The plugin includes debugger-focused patches, such as restoring expected breakpoint behavior during process attach.
Its primary use case is reverse engineering and static analysis of game binaries that employ anti-tamper measures.
