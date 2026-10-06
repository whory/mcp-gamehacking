---
name: ags-hashdb-ida
description: "This project is an IDA Pro plugin that resolves hashed API and string constants through the HashDB lookup service. Written in Python, it integrates with IDA context menus to perform single lookups, bu"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hashdb-ida
---

# hashdb ida

**Author:** OALabs
**Source:** mcp-gamehacking/skills/ags-hashdb-ida

## Description

This project is an IDA Pro plugin that resolves hashed API and string constants through the HashDB lookup service. Written in Python, it integrates with IDA context menus to perform single lookups, bulk module imports, and optional XOR-aware matching. It can also hunt likely hash algorithms and annotate matches as enums directly in disassembly. The plugin targets reverse-engineering workflows where hash-based obfuscation is common.
