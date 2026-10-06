---
name: ags-query-working-set-example
description: "QueryWorkingSetExample is a C demonstration of an anti-tamper technique based on Windows working set metadata."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-query-working-set-example
---

# QueryWorkingSetExample

**Author:** Midi12
**Source:** mcp-gamehacking/skills/ags-query-working-set-example

## Description

QueryWorkingSetExample is a C demonstration of an anti-tamper technique based on Windows working set metadata.
It shows how checking shared-page state in non-writable regions such as .text can reveal breakpointing or protection changes introduced during debugging.
The sample uses QueryWorkingSet APIs and includes minimal build files and screenshots to illustrate normal versus tampered execution.
It is intended for reverse engineers and defenders studying lightweight memory integrity checks.
