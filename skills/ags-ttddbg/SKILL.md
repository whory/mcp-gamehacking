---
name: ags-ttddbg
description: "This project is ttddbg, an IDA Pro plugin for debugging Time Travel Debugging (TTD) traces recorded by WinDbg. It loads Microsoft TTD trace files (.run) into IDA Pro, enabling forward and backward ste"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ttddbg
---

# ttddbg

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-ttddbg

## Description

This project is ttddbg, an IDA Pro plugin for debugging Time Travel Debugging (TTD) traces recorded by WinDbg. It loads Microsoft TTD trace files (.run) into IDA Pro, enabling forward and backward stepping through recorded execution without a live debugging session. The plugin replays syscalls, memory operations, and register state from the trace. It is aimed at reverse engineers and malware analysts who want IDA Pro's analysis capabilities combined with TTD's time-travel debugging.
