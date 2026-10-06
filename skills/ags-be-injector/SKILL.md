---
name: ags-be-injector
description: "This project is a Windows injection proof of concept that patches signed module code through physical memory mapping to avoid copy-on-write artifacts."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-be-injector
---

# be injector

**Author:** Compiled-Code
**Source:** mcp-gamehacking/skills/ags-be-injector

## Description

This project is a Windows injection proof of concept that patches signed module code through physical memory mapping to avoid copy-on-write artifacts.
It is implemented in C++ and demonstrates a technique intended to evade common anti-cheat integrity assumptions around loaded modules.
The design discusses bypassing checks such as thread monitoring, API-call scrutiny, and signature-based scans by modifying pages before normal module mapping behavior diverges.
Its use case is low-level anti-cheat bypass research and detection-resilience experimentation.
