---
name: ags-pp-lorer
description: "This project is an IDA Pro plugin that resolves PPL (Page Protection Layer) calls in iOS and macOS kernelcaches to their actual underlying PPL functions."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pp-lorer
---

# PPLorer

**Author:** cellebrite-labs
**Source:** mcp-gamehacking/skills/ags-pp-lorer

## Description

This project is an IDA Pro plugin that resolves PPL (Page Protection Layer) calls in iOS and macOS kernelcaches to their actual underlying PPL functions.
It provides hotkey-based navigation (Ctrl-Shift-X) for jumping between PPL gate call sites and their target PPL functions, with automatic IDB analysis to identify and annotate PPL cross-references.
The Python plugin uses ida-netnode for persistent storage and integrates with IDA's context menu for bidirectional PPL function and call site resolution.
It is mainly useful for iOS kernel researchers and reverse engineers analyzing PPL-protected code paths in Apple kernelcaches.
