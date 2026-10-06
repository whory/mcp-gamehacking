---
name: ags-signature-kid
description: "A header-only C++ tool that steals Authenticode digital signatures from signed PE files and copies them onto unsigned target executables, then hooks Windows registry internals to make the copied signa"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-signature-kid
---

# SignatureKid

**Author:** dslee2022
**Source:** mcp-gamehacking/skills/ags-signature-kid

## Description

A header-only C++ tool that steals Authenticode digital signatures from signed PE files and copies them onto unsigned target executables, then hooks Windows registry internals to make the copied signature appear valid to the OS.
It manipulates the WIN_CERTIFICATE structure in the PE's security directory and patches certificate trust verification at the system level.
It is mainly useful for security researchers studying code signing bypass techniques and anti-cheat engineers evaluating signature-based trust verification robustness.
