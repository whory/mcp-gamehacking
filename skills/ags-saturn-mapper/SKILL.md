---
name: ags-saturn-mapper
description: "This project is a Windows kernel driver manual mapper called Saturn that maps unsigned drivers into kernel memory by manually loading PE sections, resolving imports, and handling relocations. The C++ "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-saturn-mapper
---

# saturn mapper

**Author:** paysonism
**Source:** mcp-gamehacking/skills/ags-saturn-mapper

## Description

This project is a Windows kernel driver manual mapper called Saturn that maps unsigned drivers into kernel memory by manually loading PE sections, resolving imports, and handling relocations. The C++ codebase includes both a WDK kernel driver component and prebuilt driver binaries with signature scanning capabilities. It is mainly useful for kernel security researchers studying manual driver mapping techniques and kernel-level code loading without standard driver signing.
