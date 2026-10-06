---
name: ags-auto-re
description: "AutoRE is an IDA Pro plugin that helps reverse engineers speed up binary analysis workflows."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-auto-re
---

# auto re

**Author:** a1ext
**Source:** mcp-gamehacking/skills/ags-auto-re

## Description

AutoRE is an IDA Pro plugin that helps reverse engineers speed up binary analysis workflows.
Written in Python for IDA, it automatically renames dummy functions based on imported API calls and jump targets.
It also tags functions by behavioral indicators such as networking, process injection, crypto, and file activity, then presents them in a dedicated tag view.
The project is mainly used in reverse engineering and game security research to triage unfamiliar code and suspicious logic faster.
