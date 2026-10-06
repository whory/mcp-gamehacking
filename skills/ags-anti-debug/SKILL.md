---
name: ags-anti-debug
description: "Anti-Debug is a small C++ proof of concept showing debugger detection through ResumeThread suspend-count behavior."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-anti-debug
---

# Anti Debug

**Author:** Metick
**Source:** mcp-gamehacking/skills/ags-anti-debug

## Description

Anti-Debug is a small C++ proof of concept showing debugger detection through ResumeThread suspend-count behavior.
It demonstrates how a thread briefly suspended by debugger attachment can be detected by inspecting the returned count from WinAPI calls.
The example is minimal and focused on one anti-debug signal rather than a full protection framework.
It is intended for Windows security learners experimenting with anti-tamper and anti-analysis techniques.
