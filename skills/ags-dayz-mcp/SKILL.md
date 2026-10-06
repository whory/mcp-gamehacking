---
name: ags-dayz-mcp
description: "DayZ-MCP is a Model Context Protocol server that lets AI agents programmatically control a running DayZ game or server through dozens of typed tools. A Python daemon and MCP server on Windows talk to "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dayz-mcp
---

# dayz mcp

**Author:** willy92wins
**Source:** mcp-gamehacking/skills/ags-dayz-mcp

## Description

DayZ-MCP is a Model Context Protocol server that lets AI agents programmatically control a running DayZ game or server through dozens of typed tools. A Python daemon and MCP server on Windows talk to an in-game Enforce Script bridge mod that dispatches server-authoritative commands for world setup, player and vehicle manipulation, telemetry, logging, and scene observation without keyboard input or OCR. It supports an autonomous mod-development loop where an agent can pack addons, launch test instances, place entities, drive vehicles, capture screenshots, and assert on structured engine state. Session leases, localhost-only binding, credential management, and audit trails provide a controlled automation surface for local testing and server administration. The project targets DayZ mod developers, server operators, and researchers who need repeatable, scriptable interaction with the game engine for development, QA, and operational workflows.
