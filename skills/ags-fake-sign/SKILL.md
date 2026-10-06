---
name: ags-fake-sign
description: "A tool that applies fake Authenticode signatures to PE binaries to bypass signature verification checks."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-fake-sign
---

# FakeSign

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-fake-sign

## Description

A tool that applies fake Authenticode signatures to PE binaries to bypass signature verification checks.
Crafts certificate data structures that pass superficial validation while not being cryptographically valid, useful for evading signature-presence checks.
