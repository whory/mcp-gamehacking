---
name: ags-spoof-stack-safe-call
description: "This project is SafeCall, a Windows return address spoofing library that manipulates the call stack before making API calls. It replaces the real return addresses on the stack with fake legitimate ret"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-spoof-stack-safe-call
---

# spoof stack SafeCall

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-spoof-stack-safe-call

## Description

This project is SafeCall, a Windows return address spoofing library that manipulates the call stack before making API calls. It replaces the real return addresses on the stack with fake legitimate return addresses, preventing call stack analysis from revealing the true caller. This technique evades stack-based detection used by EDR products and anti-cheat systems. It is aimed at red team operators and game security researchers studying call stack spoofing and its detection.
