---
name: ags-radare2-mcp
description: "A Model Context Protocol (MCP) server written in C that exposes radare2's binary analysis capabilities to AI agents, supporting both CLI and plugin modes with stdin/stdout communication."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-radare2-mcp
---

# radare2 mcp

**Author:** dnakov
**Source:** mcp-gamehacking/skills/ags-radare2-mcp

## Description

A Model Context Protocol (MCP) server written in C that exposes radare2's binary analysis capabilities to AI agents, supporting both CLI and plugin modes with stdin/stdout communication.
It provides tools for disassembly, decompilation, cross-references, and binary analysis via r2pipe, with configurable sandboxing, readonly mode, and fine-grained tool restrictions.
It is mainly useful for security researchers integrating radare2-based binary analysis into AI-assisted reverse engineering workflows.
