---
name: ags-binja-lattice-mcp
description: "BinjaLattice is a Binary Ninja integration that connects analysis sessions to external MCP servers over an authenticated HTTP interface."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-binja-lattice-mcp
---

# binja lattice mcp

**Author:** Invoke-RE
**Source:** mcp-gamehacking/skills/ags-binja-lattice-mcp

## Description

BinjaLattice is a Binary Ninja integration that connects analysis sessions to external MCP servers over an authenticated HTTP interface.
It is implemented mainly in Python and provides token-based authentication, optional TLS, and a REST-style API for secure tool communication.
The plugin can export disassembly and pseudocode context while also allowing controlled edits such as renaming functions or adding comments.
It is aimed at reverse engineers who want AI or automation pipelines to interact with live Binary Ninja databases safely.
