---
name: ags-gui-plugin-template
description: "A Python plugin template that provides a cross-compatible GUI framework for building plugins that work simultaneously across IDA Pro, Ghidra, Binary Ninja, and Cutter using PyQt/PySide."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-gui-plugin-template
---

# gui plugin template

**Author:** danielplohmann
**Source:** mcp-gamehacking/skills/ags-gui-plugin-template

## Description

A Python plugin template that provides a cross-compatible GUI framework for building plugins that work simultaneously across IDA Pro, Ghidra, Binary Ninja, and Cutter using PyQt/PySide.
It abstracts each tool's API through a common harmonized interface layer, allowing plugin developers to write a single GUI codebase that runs in all four platforms.
It is mainly useful for reverse engineers and security researchers who want to develop portable binary analysis plugins without maintaining separate codebases per tool.
