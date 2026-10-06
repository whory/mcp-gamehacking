---
name: ags-copy-rva
description: "This project is a lightweight IDA Pro plugin that copies the RVA under the cursor to the clipboard. It is implemented as a Python script that integrates into the IDA plugin workflow and context menu u"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-copy-rva
---

# Copy RVA

**Author:** RomanRybachek
**Source:** mcp-gamehacking/skills/ags-copy-rva

## Description

This project is a lightweight IDA Pro plugin that copies the RVA under the cursor to the clipboard. It is implemented as a Python script that integrates into the IDA plugin workflow and context menu usage. The tool helps when setting breakpoints in WinDbg for drivers that do not have public symbols by quickly converting locations into usable RVAs. It is aimed at reverse engineers and kernel or game security researchers who need faster offset handling.
