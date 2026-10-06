---
name: ags-pg1903
description: "This project is a Windows kernel driver that disables PatchGuard in real-time on Windows 10 version 1903 by manipulating context page NX (no-execute) attributes. The C and x64 assembly codebase includ"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pg1903
---

# PG1903

**Author:** zzhouhe
**Source:** mcp-gamehacking/skills/ags-pg1903

## Description

This project is a Windows kernel driver that disables PatchGuard in real-time on Windows 10 version 1903 by manipulating context page NX (no-execute) attributes. The C and x64 assembly codebase includes memory scanning routines to locate PatchGuard context structures and neutralize their integrity checks. It is mainly useful for kernel security researchers studying PatchGuard internals, kernel patch protection bypass techniques, and Windows kernel integrity mechanisms.
