---
name: ags-page-table-hook
description: "This project is a Windows kernel hooking demonstration that modifies page table mappings instead of directly patching executable code. Its C++ driver constructs and edits paging structures to redirect"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-page-table-hook
---

# PageTableHook

**Author:** Rythorndoran
**Source:** mcp-gamehacking/skills/ags-page-table-hook

## Description

This project is a Windows kernel hooking demonstration that modifies page table mappings instead of directly patching executable code. Its C++ driver constructs and edits paging structures to redirect execution to hook handlers while preserving access to original routines. The example includes interception around system paths such as NtCreateFile and is framed around avoiding typical PatchGuard-triggering approaches. It is intended for advanced kernel security research and anti-cheat bypass technique study.
