---
name: ags-ghidra-mcp
description: "GhidraMCP is an MCP server and Ghidra plugin that enables LLM clients to perform reverse engineering tasks through structured tool calls."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ghidra-mcp
---

# GhidraMCP

**Author:** LaurieWired
**Source:** mcp-gamehacking/skills/ags-ghidra-mcp

## Description

GhidraMCP is an MCP server and Ghidra plugin that enables LLM clients to perform reverse engineering tasks through structured tool calls.
It exposes capabilities such as decompilation, symbol and method enumeration, and automated renaming for binaries loaded in Ghidra.
The project combines a Java-side Ghidra extension with Python bridge components for integration with desktop AI clients.
It is built for reverse engineers and security analysts who want semi-automated binary analysis workflows.
