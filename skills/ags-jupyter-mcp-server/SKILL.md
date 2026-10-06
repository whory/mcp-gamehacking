---
name: ags-jupyter-mcp-server
description: "A Model Context Protocol (MCP) server that exposes Jupyter notebook operations as MCP tools, enabling AI assistants to create, read, edit, and execute Jupyter notebooks programmatically."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-jupyter-mcp-server
---

# jupyter mcp server

**Author:** datalayer
**Source:** mcp-gamehacking/skills/ags-jupyter-mcp-server

## Description

A Model Context Protocol (MCP) server that exposes Jupyter notebook operations as MCP tools, enabling AI assistants to create, read, edit, and execute Jupyter notebooks programmatically.
It supports multiple transport modes (stdio, streamable HTTP) and can connect to local Jupyter servers, JupyterHub, or Google Colab environments.
It is mainly useful for AI-assisted data analysis workflows and integrating notebook-based computation into LLM tool-use pipelines.
