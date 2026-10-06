---
name: ags-mempeek
description: "Linux command-line tool for live process memory inspection via /proc/pid/mem, offering Cheat Engine-style value scanning with constraint filters (equal, not-equal, changed, increased, decreased, range"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mempeek
---

# mempeek

**Author:** gamozolabs
**Source:** mcp-gamehacking/skills/ags-mempeek

## Description

Linux command-line tool for live process memory inspection via /proc/pid/mem, offering Cheat Engine-style value scanning with constraint filters (equal, not-equal, changed, increased, decreased, range). It uses the libprocmem crate to parse /proc/pid/maps for readable regions, supports multi-radix expression evaluation (hex, octal, decimal), and provides a persistent rustyline-based REPL with command history across sessions.
