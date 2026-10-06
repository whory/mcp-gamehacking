---
name: ags-create-process-as-ppl
description: "This tool launches Windows processes with specific Protected Process Light levels."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-create-process-as-ppl
---

# CreateProcessAsPPL

**Author:** 2x7EQ13
**Source:** mcp-gamehacking/skills/ags-create-process-as-ppl

## Description

This tool launches Windows processes with specific Protected Process Light levels.
It is implemented in C++ and exposes command-line modes for protection levels such as WinTCB, Windows, Antimalware, and LSA.
The project focuses on practical handling of process protection semantics and how executable launch behavior changes under different PPL modes.
It is mainly useful for Windows internals and security researchers testing protected-process boundaries, tooling compatibility, and defensive assumptions.
