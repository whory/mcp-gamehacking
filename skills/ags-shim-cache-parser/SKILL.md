---
name: ags-shim-cache-parser
description: "This project is a Python tool for parsing Application Compatibility Shim Cache (AppCompatCache) entries from Windows registry hives. It extracts timestamps, file paths, and execution flags from the Sh"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-shim-cache-parser
---

# ShimCacheParser

**Author:** mandiant
**Source:** mcp-gamehacking/skills/ags-shim-cache-parser

## Description

This project is a Python tool for parsing Application Compatibility Shim Cache (AppCompatCache) entries from Windows registry hives. It extracts timestamps, file paths, and execution flags from the ShimCache data stored in the SYSTEM registry hive, supporting multiple Windows versions from XP through Windows 10. The parsed output can be exported in CSV or timeline format for forensic analysis. It is aimed at incident responders and digital forensics analysts investigating program execution history on Windows systems.
