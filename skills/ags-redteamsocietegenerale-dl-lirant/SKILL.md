---
name: ags-redteamsocietegenerale-dl-lirant
description: "This project is DLLirant, a tool for automated DLL hijacking vulnerability discovery on Windows. It tests executables for DLL search order hijacking by generating proxy DLLs, placing them in candidate"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-redteamsocietegenerale-dl-lirant
---

# DLLirant

**Author:** redteamsocietegenerale
**Source:** mcp-gamehacking/skills/ags-redteamsocietegenerale-dl-lirant

## Description

This project is DLLirant, a tool for automated DLL hijacking vulnerability discovery on Windows. It tests executables for DLL search order hijacking by generating proxy DLLs, placing them in candidate directories, and monitoring whether the target application loads them. The tool automates the process of identifying missing DLL dependencies and unsafe search paths. It is aimed at penetration testers and security auditors finding DLL hijacking opportunities for privilege escalation or persistence.
