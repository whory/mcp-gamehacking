---
name: ags-io-create-driver
description: "This project shares a custom implementation of IoCreateDriver behavior for Windows kernel experimentation."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-io-create-driver
---

# IoCreateDriver

**Author:** Th3Spl
**Source:** mcp-gamehacking/skills/ags-io-create-driver

## Description

This project shares a custom implementation of IoCreateDriver behavior for Windows kernel experimentation.
It highlights techniques intended to avoid standard driver load visibility paths, including bypassing common logging points.
The code is written in C/C++ for Visual Studio and WDK workflows, with notes for manual mapping setups and entry-point adjustments.
It is primarily aimed at low-level Windows internals and anti-cheat evasion research.
