---
name: ags-angrop
description: "This project is an automatic ROP gadget finder and chain builder built on the angr framework."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-angrop
---

# angrop

**Author:** angr
**Source:** mcp-gamehacking/skills/ags-angrop

## Description

This project is an automatic ROP gadget finder and chain builder built on the angr framework.
It uses symbolic execution, constraint solving, and graph search to model gadget effects and synthesize exploit chains programmatically.
The tool is implemented in Python, exposes both a CLI and API, and is architecture-agnostic across multiple targets.
It is primarily useful for exploit development, binary research, and offensive security workflows that overlap with game client vulnerability analysis.
