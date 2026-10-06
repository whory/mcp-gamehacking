---
name: ags-x64dbg-trace-reader
description: "Standalone parser for x64dbg's .trace64 binary trace format that deserializes instruction records, disassembles them via the Capstone engine, and supports regex-based filtering over execution traces. "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-x64dbg-trace-reader
---

# x64dbgTraceReader

**Author:** mibho
**Source:** mcp-gamehacking/skills/ags-x64dbg-trace-reader

## Description

Standalone parser for x64dbg's .trace64 binary trace format that deserializes instruction records, disassembles them via the Capstone engine, and supports regex-based filtering over execution traces. Reconstructs per-instruction register and memory state from the compact trace buffer format for offline analysis.
