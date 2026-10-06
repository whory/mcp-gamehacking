---
name: ags-be-shellcode-dump
description: "This project is a tool for dumping BattlEye's runtime shellcode scanning modules from protected game processes. It intercepts the shellcode payloads that BattlEye streams and executes within game proc"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-be-shellcode-dump
---

# be shellcode dump

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-be-shellcode-dump

## Description

This project is a tool for dumping BattlEye's runtime shellcode scanning modules from protected game processes. It intercepts the shellcode payloads that BattlEye streams and executes within game processes for cheat detection, saving them for offline reverse engineering analysis. The dumped modules reveal BattlEye's detection signatures and scanning logic. It is aimed at anti-cheat researchers reverse engineering BattlEye's detection methodology.
