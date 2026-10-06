---
name: ags-ida-codex-mcp
description: "This project connects IDA Pro to MCP clients through a local bridge and server. It exposes reverse engineering capabilities such as function listing, call graphs, pseudocode and disassembly retrieval,"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ida-codex-mcp
---

# ida codex mcp

**Author:** Iamgublin
**Source:** mcp-gamehacking/skills/ags-ida-codex-mcp

## Description

This project connects IDA Pro to MCP clients through a local bridge and server. It exposes reverse engineering capabilities such as function listing, call graphs, pseudocode and disassembly retrieval, xrefs, strings, memory reads, and renaming or typing helpers. The solution is written in Python, combining an IDA plugin that serves TCP JSON requests with an MCP stdio server that re-exports tools and resources. It targets analysts who want to automate reverse engineering workflows from AI-assisted tooling.
