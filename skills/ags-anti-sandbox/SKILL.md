---
name: ags-anti-sandbox
description: "This project is a small Windows proof of concept for detecting Any.Run-like sandbox environments using host artifact checks."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-anti-sandbox
---

# Anti Sandbox

**Author:** SaadAhla
**Source:** mcp-gamehacking/skills/ags-anti-sandbox

## Description

This project is a small Windows proof of concept for detecting Any.Run-like sandbox environments using host artifact checks.
It is written in C++ and combines folder presence checks, process enumeration, user-profile heuristics, and service or driver lookup logic.
The sample triggers a detection result only when multiple indicators match expected sandbox traits, demonstrating a layered evasion approach.
It is intended for malware analysis research and for understanding how sandbox-aware code can evade automated inspection.
