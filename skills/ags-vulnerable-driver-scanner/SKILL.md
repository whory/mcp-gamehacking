---
name: ags-vulnerable-driver-scanner
description: "This project is a Windows driver triage utility that scans folders for potentially risky kernel drivers. It is implemented as a C++ console application that parses PE imports and flags binaries contai"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vulnerable-driver-scanner
---

# VulnerableDriverScanner

**Author:** Sentient111
**Source:** mcp-gamehacking/skills/ags-vulnerable-driver-scanner

## Description

This project is a Windows driver triage utility that scans folders for potentially risky kernel drivers. It is implemented as a C++ console application that parses PE imports and flags binaries containing selected driver-related APIs. The current detection logic is simple and focuses on indicative imports rather than full behavioral analysis. It is useful for preliminary vulnerable-driver hunting and kernel attack surface assessment in security research workflows.
