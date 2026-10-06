---
name: ags-mod-finder
description: "ModFinder is a Windows C++ utility designed to locate manually mapped modules in process memory. It enumerates mapped regions and checks DOS-header patterns to identify suspicious injections, includin"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mod-finder
---

# ModFinder

**Author:** Nou4r
**Source:** mcp-gamehacking/skills/ags-mod-finder

## Description

ModFinder is a Windows C++ utility designed to locate manually mapped modules in process memory. It enumerates mapped regions and checks DOS-header patterns to identify suspicious injections, including cases where parts of optional headers are removed. The implementation is native C++ with a Visual Studio project layout and practical focus on x86 process analysis. Its primary use case is anti-cheat and malware-oriented memory forensics during runtime investigations.
