---
name: ags-raccine
description: "This project is a lightweight anti-ransomware tool for Windows that blocks destructive shadow-copy deletion commands."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-raccine
---

# Raccine

**Author:** Neo23x0
**Source:** mcp-gamehacking/skills/ags-raccine

## Description

This project is a lightweight anti-ransomware tool for Windows that blocks destructive shadow-copy deletion commands.
It registers itself as a debugger for utilities such as vssadmin and wmic, then evaluates command-line behavior with YARA rules.
When malicious patterns are detected, it terminates the parent process chain and logs events without requiring a resident agent service.
The codebase combines C, C++, and C# components and is intended for defensive security operations and incident prevention.
