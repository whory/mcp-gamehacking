---
name: ags-zeroimport
description: "ZeroImport is a C++ library for Windows kernel drivers that resolves imports at runtime instead of relying on static imports."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-zeroimport
---

# zeroimport

**Author:** 1hAck-0
**Source:** mcp-gamehacking/skills/ags-zeroimport

## Description

ZeroImport is a C++ library for Windows kernel drivers that resolves imports at runtime instead of relying on static imports.
It hashes export names and walks ntoskrnl exports to locate functions and variables such as MmIsAddressValid and PsInitialSystemProcess.
The design minimizes import table artifacts and avoids embedding cleartext API strings in the compiled driver, with optional caching for performance.
It is mainly used in low-level driver development and security research where stealth and resistance to static analysis are important.
