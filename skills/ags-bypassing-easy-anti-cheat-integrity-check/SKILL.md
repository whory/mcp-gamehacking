---
name: ags-bypassing-easy-anti-cheat-integrity-check
description: "A technical analysis and bypass for EasyAntiCheat's kernel-mode driver integrity checks."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bypassing-easy-anti-cheat-integrity-check
---

# Bypassing EasyAntiCheat Integrity check

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-bypassing-easy-anti-cheat-integrity-check

## Description

A technical analysis and bypass for EasyAntiCheat's kernel-mode driver integrity checks.
Demonstrates how EAC validates its driver sections using CreateProcess and LoadImage notification routines, and provides a Capstone-based deobfuscation tool that strips garbage instructions to reveal the underlying integrity check logic.
Includes reconstructed C++ code of the integrity check function showing section-by-section comparison against a stored driver copy.
