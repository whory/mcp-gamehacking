---
name: ags-av-edr-killer
description: "This project focuses on wsftprm.sys."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-av-edr-killer
---

# AV EDR Killer

**Author:** xM0kht4r
**Source:** mcp-gamehacking/skills/ags-av-edr-killer

## Description

This project focuses on wsftprm.sys.
The vulnerability is triggered via IOCTL code 0x22201C with a 1036-byte buffer where the first 4 bytes contain the target Process ID as a DWORD.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / vulnerable driver area.
