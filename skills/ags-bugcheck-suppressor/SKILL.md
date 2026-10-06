---
name: ags-bugcheck-suppressor
description: "A Windows kernel driver that suppresses blue screen crashes (BSODs) by hooking bugcheck callbacks and performing SEH-based recovery under HVCI, using CET-compatible assembly stubs to survive kernel ex"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bugcheck-suppressor
---

# BugcheckSuppressor

**Author:** XaFF-XaFF
**Source:** mcp-gamehacking/skills/ags-bugcheck-suppressor

## Description

A Windows kernel driver that suppresses blue screen crashes (BSODs) by hooking bugcheck callbacks and performing SEH-based recovery under HVCI, using CET-compatible assembly stubs to survive kernel exceptions.
