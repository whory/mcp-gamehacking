---
name: ags-driver-dll-f-inder
description: "This project is a Windows user-mode utility that searches for candidate driver or DLL modules with oversized sections that can host another image. It enumerates files in System32 or System32\drivers, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-dll-f-inder
---

# DriverDllFInder

**Author:** armvirus
**Source:** mcp-gamehacking/skills/ags-driver-dll-f-inder

## Description

This project is a Windows user-mode utility that searches for candidate driver or DLL modules with oversized sections that can host another image. It enumerates files in System32 or System32\drivers, parses PE headers, and compares a chosen section size against the target image size. For driver targets it skips currently loaded drivers by querying active services, which helps narrow results to replacable files. The tool is aimed at low-level Windows and anti-cheat research workflows where section-based mapping candidates need to be identified quickly.
