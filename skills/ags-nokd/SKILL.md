---
name: ags-nokd
description: "This project focuses on kernel debugger protocol."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nokd
---

# nokd

**Author:** irql
**Source:** mcp-gamehacking/skills/ags-nokd

## Description

This project focuses on kernel debugger protocol.
The implementation does not require any of the KD specific variables in ntoskrnl to be set, it will copy the KdDebuggerDataBlock to local memory and decoded it inline, then pass this to WinDBG as the debugger block, making it very difficult to flag.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / windows kernel explorer area.
