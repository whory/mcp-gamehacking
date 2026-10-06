---
name: ags-x64dbg-mcp-server
description: "This project is a plugin that exposes debugger functionality through an MCP-compatible HTTP interface for x64dbg and related variants. It is built in C# on .NET Framework and maps debugger actions to "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-x64dbg-mcp-server
---

# x64DbgMCPServer

**Author:** AgentSmithers
**Source:** mcp-gamehacking/skills/ags-x64dbg-mcp-server

## Description

This project is a plugin that exposes debugger functionality through an MCP-compatible HTTP interface for x64dbg and related variants. It is built in C# on .NET Framework and maps debugger actions to remotely callable commands for memory reads, disassembly, register queries, labeling, and automation. The architecture includes a lightweight self-hosted listener and modular command routing designed for tool integration and rapid extension. It is aimed at AI-assisted reverse engineering and scripted game security analysis workflows.
