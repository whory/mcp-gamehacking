---
name: ags-pooldump
description: "This project is a Windows kernel pool memory dumper that extracts and displays contents of kernel pool allocations. It scans kernel pool pages to enumerate allocated blocks, their pool tags, sizes, an"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pooldump
---

# pooldump

**Author:** ioncodes
**Source:** mcp-gamehacking/skills/ags-pooldump

## Description

This project is a Windows kernel pool memory dumper that extracts and displays contents of kernel pool allocations. It scans kernel pool pages to enumerate allocated blocks, their pool tags, sizes, and owning drivers, and can dump the contents of specific pool allocations. The tool helps identify kernel-mode artifacts left by drivers and rootkits in pool memory. It is aimed at kernel forensics researchers and anti-cheat analysts examining kernel pool artifacts for evidence of manually mapped drivers.
