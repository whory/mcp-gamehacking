---
name: ags-yara-vm
description: "IDA Pro processor module and loader for disassembling compiled YARA rule binaries (.yar.bin), enabling static analysis of YARA bytecode and regex bytecode within the IDA environment. Parses the YARA a"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-yara-vm
---

# YaraVM

**Author:** milankovo
**Source:** mcp-gamehacking/skills/ags-yara-vm

## Description

IDA Pro processor module and loader for disassembling compiled YARA rule binaries (.yar.bin), enabling static analysis of YARA bytecode and regex bytecode within the IDA environment. Parses the YARA arena-based file format (namespaces, rules, strings, code sections, AC transition tables) and provides a custom type information library (libyara.til) for struct annotation.
