---
name: ags-un-kover
description: "This project is unKover, a Windows kernel tool for detecting hidden kernel-mode threads and rootkit artifacts. It enumerates system threads through multiple methods (scheduler lists, PspCidTable, stac"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-un-kover
---

# unKover

**Author:** eversinc33
**Source:** mcp-gamehacking/skills/ags-un-kover

## Description

This project is unKover, a Windows kernel tool for detecting hidden kernel-mode threads and rootkit artifacts. It enumerates system threads through multiple methods (scheduler lists, PspCidTable, stack scanning) and cross-references results to identify threads that are hidden from standard API enumeration. The C driver detects anti-cheat and rootkit thread hiding techniques. It is aimed at anti-cheat developers and kernel forensics researchers detecting stealth system threads.
