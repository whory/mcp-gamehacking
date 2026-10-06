---
name: ags-x64dbg-mcp
description: "This project is an MCP server that provides AI assistants with full control over the x64dbg debugger through 23 mega-tools covering 151 REST endpoints."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-x64dbg-mcp
---

# x64dbg mcp

**Author:** bromoket
**Source:** mcp-gamehacking/skills/ags-x64dbg-mcp

## Description

This project is an MCP server that provides AI assistants with full control over the x64dbg debugger through 23 mega-tools covering 151 REST endpoints.
It supports stepping, breakpoints, memory operations, disassembly, tracing, anti-debug bypasses, control flow analysis, PE dumping, and is compatible with Claude, Cursor, Windsurf, and other MCP clients.
The TypeScript server uses Zod discriminated unions for type-safe endpoint mapping, with a native x64dbg plugin (.dp64/.dp32) bridging the debugger to the REST API.
It is mainly useful for reverse engineers seeking AI-augmented debugging workflows and automated binary analysis through x64dbg.
