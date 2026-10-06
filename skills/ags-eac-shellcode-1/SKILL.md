---
name: ags-eac-shellcode-1
description: "This repository is an archived dump of shellcode recovered from an Easy Anti-Cheat protected game around March 2023."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eac-shellcode-1
---

# EAC shellcode 1

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-eac-shellcode-1

## Description

This repository is an archived dump of shellcode recovered from an Easy Anti-Cheat protected game around March 2023.
The archive only contains a raw memory image named shellcode_size0x82C000.mem and a short README identifying it as anti-cheat shellcode from a protected game dumper.
That README records two execution entry points exposed through the protected game's inline hook at base+0x79204 and base+0x79304.
It is best understood as sample material for reverse engineering EAC shellcode layout and hook-driven execution flow rather than a reusable implementation.
