---
name: ags-process-cloning
description: "This project is a Windows process cloning proof of concept in C that creates a copy of a running process using NtCreateProcessEx with the parent process handle. The cloned process inherits the virtual"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-process-cloning
---

# process cloning

**Author:** huntandhackett
**Source:** mcp-gamehacking/skills/ags-process-cloning

## Description

This project is a Windows process cloning proof of concept in C that creates a copy of a running process using NtCreateProcessEx with the parent process handle. The cloned process inherits the virtual address space snapshot of the original, enabling techniques such as process hollowing, memory analysis, or credential dumping from the clone without directly accessing the target. It is aimed at security researchers studying process manipulation techniques and their detection opportunities.
