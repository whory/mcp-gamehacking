---
name: ags-go-defender
description: "This project is a Windows-focused security toolkit written in Go to harden programs against analysis and tampering."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-go-defender
---

# GoDefender

**Author:** EvilBytecode
**Source:** mcp-gamehacking/skills/ags-go-defender

## Description

This project is a Windows-focused security toolkit written in Go to harden programs against analysis and tampering.
It includes anti-debug, anti-virtualization, anti-DLL-injection, and hook-detection modules organized as reusable internal components.
The code relies on low-level Windows API interactions to detect suspicious runtime conditions and raise defensive signals.
Its primary use case is defensive research and adding anti-reverse-engineering checks to security-sensitive Go applications.
