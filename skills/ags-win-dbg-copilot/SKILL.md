---
name: ags-win-dbg-copilot
description: "This project is an AI-assisted extension that connects WinDbg debugging sessions with a ChatGPT-style copilot. It is implemented as a Python package that reads debugger command output and returns guid"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-win-dbg-copilot
---

# WinDbg Copilot

**Author:** DumpAnalysis
**Source:** mcp-gamehacking/skills/ags-win-dbg-copilot

## Description

This project is an AI-assisted extension that connects WinDbg debugging sessions with a ChatGPT-style copilot. It is implemented as a Python package that reads debugger command output and returns guidance, explanations, or next-command suggestions. The tool supports both OpenAI and Azure OpenAI backends through environment-based configuration. It is mainly intended for crash analysis, kernel debugging, and reverse-engineering workflows where faster triage is valuable.
