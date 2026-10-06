---
name: ags-lsass-dump-that-lsass
description: "This project is a user-mode LSASS dumping proof of concept that combines handle theft with an unhooked copy of DbgHelp and a lightly obfuscated dumping path."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-lsass-dump-that-lsass
---

# LSASS DumpThatLSASS

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-lsass-dump-that-lsass

## Description

This project is a user-mode LSASS dumping proof of concept that combines handle theft with an unhooked copy of DbgHelp and a lightly obfuscated dumping path.
The archived README describes the approach as duplicating an existing LSASS process handle from another process, then calling MiniDumpWriteDump through a fresh DbgHelp.dll copy loaded from disk instead of relying on possibly hooked exports.
Its code enumerates SystemHandleInformation, duplicates candidate process handles, filters them by full image path containing lsass.exe, writes the dump to a temp file, and then encrypts the resulting file on disk.
It is mainly useful for Windows security researchers studying handle-based dump acquisition, user-mode hook evasion around MiniDumpWriteDump, and the tradeoffs of recycled privileged handles.
