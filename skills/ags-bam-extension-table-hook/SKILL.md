---
name: ags-bam-extension-table-hook
description: "This repository is a Windows kernel proof of concept for hooking process notifications through the BAM extension table mechanism. Instead of relying on the standard process notify callback array, it t"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bam-extension-table-hook
---

# BamExtensionTableHook

**Author:** Dor00tkit
**Source:** mcp-gamehacking/skills/ags-bam-extension-table-hook

## Description

This repository is a Windows kernel proof of concept for hooking process notifications through the BAM extension table mechanism. Instead of relying on the standard process notify callback array, it targets the extension host path and swaps the BAM callback pointer with a custom routine. The driver code demonstrates ntoskrnl offset-based lookup, callback pointer replacement, and temporary notify mask handling. It is intended for advanced anti-cheat and EDR research on callback bypasses, defensive visibility, and undocumented kernel internals.
