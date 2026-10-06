---
name: ags-symbolizer
description: "This project is a Windows execution-trace symbolizer that resolves raw instruction pointers to symbolic locations. It uses dbgeng and crash dump data to translate trace addresses into readable functio"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-symbolizer
---

# symbolizer

**Author:** 0vercl0k
**Source:** mcp-gamehacking/skills/ags-symbolizer

## Description

This project is a Windows execution-trace symbolizer that resolves raw instruction pointers to symbolic locations. It uses dbgeng and crash dump data to translate trace addresses into readable function-level output for analysis. The implementation is in C++ and packaged as a command-line tool with supporting libraries for formatting and argument handling. It is mainly useful for crash triage, exploit debugging, and postmortem trace workflows.
