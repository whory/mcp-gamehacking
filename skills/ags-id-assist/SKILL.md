---
name: ags-id-assist
description: "This project focuses on aI-powered RE plugin for IDA Pro: LLM function explanation, semantic knowledge graph, RAG, MCP integration."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-id-assist
---

# IDAssist

**Author:** jtang613
**Source:** mcp-gamehacking/skills/ags-id-assist

## Description

This project focuses on aI-powered RE plugin for IDA Pro: LLM function explanation, semantic knowledge graph, RAG, MCP integration.
Built with Python and PySide6, IDAssist runs as a dockable panel inside IDA Pro 9.0+ and communicates with LLM providers (OpenAI, Anthropic, Ollama, LiteLLM, and more) to analyze functions, suggest renames, answer questions about code, and build a searchable knowledge graph of an entire binary.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / ida plugins area.
