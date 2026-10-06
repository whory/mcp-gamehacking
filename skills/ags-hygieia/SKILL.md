---
name: ags-hygieia
description: "This project is a Windows kernel driver for investigating traces left by vulnerable drivers. It scans paging structures to locate known driver artifacts and supports 1 GB, 2 MB, and 4 KB page mappings"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hygieia
---

# hygieia

**Author:** Deputation
**Source:** mcp-gamehacking/skills/ags-hygieia

## Description

This project is a Windows kernel driver for investigating traces left by vulnerable drivers. It scans paging structures to locate known driver artifacts and supports 1 GB, 2 MB, and 4 KB page mappings. The implementation is written in C/C++ with WDK-style driver tooling and is aimed at low-level memory forensics. It is primarily intended for anti-cheat and kernel security research focused on detecting or understanding prior unsigned driver activity.
