---
name: ags-binaryninja-openai
description: "This project is a Binary Ninja plugin that connects decompiler views to OpenAI models for interactive analysis assistance."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-binaryninja-openai
---

# binaryninja openai

**Author:** WhatTheFuzz
**Source:** mcp-gamehacking/skills/ags-binaryninja-openai

## Description

This project is a Binary Ninja plugin that connects decompiler views to OpenAI models for interactive analysis assistance.
It can summarize what selected functions do from HLIL or pseudo-C and can propose variable renames directly in the analysis view.
The plugin is written in Python and integrates with Binary Ninja plugin settings and API key management options.
It is intended for reverse engineers who want AI-assisted triage and annotation during binary security research.
