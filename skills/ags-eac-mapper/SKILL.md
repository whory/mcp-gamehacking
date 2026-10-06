---
name: ags-eac-mapper
description: "This project is a kernel mapping proof of concept that targets a session-driver integrity blind spot in EasyAntiCheat."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eac-mapper
---

# eac mapper

**Author:** Compiled-Code
**Source:** mcp-gamehacking/skills/ags-eac-mapper

## Description

This project is a kernel mapping proof of concept that targets a session-driver integrity blind spot in EasyAntiCheat.
It is written in C++ and explains how read-only section checks can be bypassed when drivers are not globally mapped in the anti-cheat execution context.
The implementation demonstrates patching and hook placement strategies for low-noise user-kernel communication in that scenario.
It is intended for anti-cheat internals research and defensive understanding of mapper-style attack paths.
