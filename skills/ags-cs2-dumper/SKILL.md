---
name: ags-cs2-dumper
description: "cs2-dumper is an external offset and interface dumper for Counter-Strike 2."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cs2-dumper
---

# cs2 dumper

**Author:** a2x
**Source:** mcp-gamehacking/skills/ags-cs2-dumper

## Description

cs2-dumper is an external offset and interface dumper for Counter-Strike 2.
Its core is written in Rust and uses memflow-based memory access on both Windows and Linux.
The tool can emit structured outputs in C#, C++, Rust, and JSON for downstream automation.
It is mainly used by game security researchers and cheat or anti-cheat analysts who need current schema and offset data.
