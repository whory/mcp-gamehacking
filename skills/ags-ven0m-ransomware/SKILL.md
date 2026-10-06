---
name: ags-ven0m-ransomware
description: "This project focuses on iMFForceDelete.sys."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ven0m-ransomware
---

# VEN0m Ransomware

**Author:** xM0kht4r
**Source:** mcp-gamehacking/skills/ags-ven0m-ransomware

## Description

This project focuses on iMFForceDelete.sys.
AV/EDR Evasion: VEN0m employs the classic BYOVD technique, but unlike the AV-EDR-KILLER, which exploits a vulnerable driver that exposes the kernel function ZwTerminateProcess to unprivileged users, it leverages a vulnerable driver included in IObit Malware Fighter v12.1.0 which is kinda ironic since we are using it for evasion.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / vulnerable driver area.
