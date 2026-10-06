---
name: ags-miscusi-peek-cheatengine-mcp-bridge
description: "Model Context Protocol (MCP) bridge that connects AI agents to Cheat Engine via a Named Pipe architecture, exposing 40+ tools for memory reading, AOB scanning, pointer chain traversal, structure disse"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-miscusi-peek-cheatengine-mcp-bridge
---

# cheatengine mcp bridge

**Author:** miscusi-peek
**Source:** mcp-gamehacking/skills/ags-miscusi-peek-cheatengine-mcp-bridge

## Description

Model Context Protocol (MCP) bridge that connects AI agents to Cheat Engine via a Named Pipe architecture, exposing 40+ tools for memory reading, AOB scanning, pointer chain traversal, structure dissection, RTTI class identification, hardware breakpoints (DR0-DR3), and DBVM hypervisor-level tracing. Uses a Lua worker thread in CE synchronized with a Python FastMCP server for sub-2ms command latency.
