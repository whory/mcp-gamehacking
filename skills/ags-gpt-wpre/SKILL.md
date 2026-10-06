---
name: ags-gpt-wpre
description: "Python tool that performs whole-program reverse engineering by extracting Ghidra decompilation output and call graphs via ghidra_bridge, then recursively summarizing functions bottom-up using GPT-3 (t"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-gpt-wpre
---

# gpt wpre

**Author:** moyix
**Source:** mcp-gamehacking/skills/ags-gpt-wpre

## Description

Python tool that performs whole-program reverse engineering by extracting Ghidra decompilation output and call graphs via ghidra_bridge, then recursively summarizing functions bottom-up using GPT-3 (text-davinci-003). Builds natural language summaries of callee dependencies as context for each function, working around LLM context window limits to produce human-readable program analysis.
