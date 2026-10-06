---
name: ags-import-kallsyms
description: "This project is an IDA Pro plugin that imports Linux kernel symbols from a kallsyms dump."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-import-kallsyms
---

# import kallsyms

**Author:** XMCVE
**Source:** mcp-gamehacking/skills/ags-import-kallsyms

## Description

This project is an IDA Pro plugin that imports Linux kernel symbols from a kallsyms dump.
It is implemented in Python and maps symbol names and addresses into the disassembler database for easier navigation.
By restoring symbol context, it improves static analysis speed when working with stripped or partially symbolized kernel images.
It is primarily intended for kernel reverse engineers and vulnerability researchers.
