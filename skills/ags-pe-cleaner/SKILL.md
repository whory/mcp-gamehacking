---
name: ags-pe-cleaner
description: "This project is PECleaner, a Windows tool for stripping debug information, Rich headers, timestamps, and other metadata from PE (Portable Executable) files. It zeros out or removes compilation artifac"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-pe-cleaner
---

# PECleaner

**Author:** colinsenner
**Source:** mcp-gamehacking/skills/ags-pe-cleaner

## Description

This project is PECleaner, a Windows tool for stripping debug information, Rich headers, timestamps, and other metadata from PE (Portable Executable) files. It zeros out or removes compilation artifacts that can be used for attribution or fingerprinting, including the PDB path, linker version, compiler timestamps, and Rich header data. The C# tool helps sanitize binaries before distribution. It is aimed at red team operators, malware researchers, and developers wanting to strip identifying metadata from compiled executables.
