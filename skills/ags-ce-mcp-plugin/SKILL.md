---
name: ags-ce-mcp-plugin
description: "This project is a Cheat Engine plugin that exposes memory editing and process control features through an AI-oriented command channel."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ce-mcp-plugin
---

# CE MCP Plugin

**Author:** Eruditi
**Source:** mcp-gamehacking/skills/ags-ce-mcp-plugin

## Description

This project is a Cheat Engine plugin that exposes memory editing and process control features through an AI-oriented command channel.
It is implemented in C with Lua integration and uses asynchronous TCP communication to receive and execute remote instructions without blocking the host interface.
The plugin supports a broad command set for memory read and write operations, freezing values, disassembly and assembly tasks, process management, and DLL injection actions.
Its primary use case is automating game memory research workflows from external tooling and experimenting with AI-assisted Cheat Engine control.
