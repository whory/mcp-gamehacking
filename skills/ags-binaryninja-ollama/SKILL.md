---
name: ags-binaryninja-ollama
description: "binaryninja-ollama is a Binary Ninja plugin that uses a locally hosted Ollama server to rename functions and variables with LLM assistance. It is written in Python and integrates directly with HLIL wo"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-binaryninja-ollama
---

# binaryninja ollama

**Author:** ahaggard2013
**Source:** mcp-gamehacking/skills/ags-binaryninja-ollama

## Description

binaryninja-ollama is a Binary Ninja plugin that uses a locally hosted Ollama server to rename functions and variables with LLM assistance. It is written in Python and integrates directly with HLIL workflows for bulk renaming and targeted renaming actions. The plugin provides configurable server, port, and model settings so users can run analysis offline with locally available models. It is aimed at reverse engineers who want faster semantic labeling without sending binaries or code context to third-party cloud services.
