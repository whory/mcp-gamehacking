---
name: ags-aarch64-sysreg-ida
description: "This project is an IDA Pro plugin that improves AArch64 system register readability during disassembly. It is written in Python and hooks instruction display paths so cryptic MSR and SYS encodings are"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-aarch64-sysreg-ida
---

# aarch64 sysreg ida

**Author:** TrungNguyen1909
**Source:** mcp-gamehacking/skills/ags-aarch64-sysreg-ida

## Description

This project is an IDA Pro plugin that improves AArch64 system register readability during disassembly. It is written in Python and hooks instruction display paths so cryptic MSR and SYS encodings are shown as meaningful register names. The plugin includes an embedded ARMv8 register database and can load extra Apple register definitions from an external JSON file. Its primary use case is ARM OS and kernel reverse engineering, where fast register interpretation is essential.
