---
name: ags-no-access-protection-x86
description: "This project demonstrates a memory protection technique using PAGE_NOACCESS page guards on x86 Windows. It marks code pages as no-access and uses a VEH handler to temporarily restore access on demand,"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-no-access-protection-x86
---

# no access protection x86

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-no-access-protection-x86

## Description

This project demonstrates a memory protection technique using PAGE_NOACCESS page guards on x86 Windows. It marks code pages as no-access and uses a VEH handler to temporarily restore access on demand, creating a form of on-access decryption that hinders static analysis and memory dumping. It is aimed at software protection researchers studying page-level access control for anti-tamper and anti-dump protection.
