---
name: ags-hint-inject
description: "PE injection technique that conceals shellcode inside the Hint/Name Table entries of fabricated Import Directory entries. It splits a raw shellcode payload into chunks sized to fit each fake imported "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hint-inject
---

# HintInject

**Author:** frkngksl
**Source:** mcp-gamehacking/skills/ags-hint-inject

## Description

PE injection technique that conceals shellcode inside the Hint/Name Table entries of fabricated Import Directory entries. It splits a raw shellcode payload into chunks sized to fit each fake imported DLL's export name slots, writes them into the PE's import lookup table, and reconstructs the shellcode at load time through the loader's normal IAT resolution path. The tool parses target PE section headers, manipulates RVA-to-offset translations, and randomly selects export names from system DLLs to populate the fake entries.
