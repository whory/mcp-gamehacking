---
name: ags-self-remapping-code
description: "This project is a Windows proof of concept demonstrating self-remapping code as an anti-tampering technique. It creates multiple virtual mappings of the same physical pages, executes code from one map"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-self-remapping-code
---

# Self Remapping Code

**Author:** changeofpace
**Source:** mcp-gamehacking/skills/ags-self-remapping-code

## Description

This project is a Windows proof of concept demonstrating self-remapping code as an anti-tampering technique. It creates multiple virtual mappings of the same physical pages, executes code from one mapping while integrity-checking another, making it difficult for debuggers and patching tools to modify the running code without being detected. The C implementation shows how section-backed file mappings can create aliased views. It is aimed at software protection researchers studying anti-patching and anti-debugging techniques through memory aliasing.
