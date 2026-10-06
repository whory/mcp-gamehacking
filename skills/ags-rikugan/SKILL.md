---
name: ags-rikugan
description: "This project is a reverse-engineering AI agent for IDA Pro and Binary Ninja that integrates multi-provider LLM support directly into the disassembler UI."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rikugan
---

# Rikugan

**Author:** buzzer-re
**Source:** mcp-gamehacking/skills/ags-rikugan

## Description

This project is a reverse-engineering AI agent for IDA Pro and Binary Ninja that integrates multi-provider LLM support directly into the disassembler UI.
It features a generator-based agentic loop with streaming, in-process tool orchestration, automatic error recovery, plan mode for multi-step workflows, and context management without leaving the RE environment.
The Python plugin supports multiple LLM providers including cloud APIs and local Ollama installations, with a chat interface accessible via Ctrl+Shift+I.
It is mainly useful for reverse engineers seeking an embedded AI assistant for binary analysis that operates natively within IDA Pro or Binary Ninja.
