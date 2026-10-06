---
name: ags-ds-ark64
description: "This project focuses on bYOVD: DsArk64.sys (Qihoo 360) - WHQL-signed, process kill from ring 0 + kernel R/W."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ds-ark64
---

# DsArk64

**Author:** sai2fast
**Source:** mcp-gamehacking/skills/ags-ds-ark64

## Description

This project focuses on bYOVD: DsArk64.sys (Qihoo 360) - WHQL-signed, process kill from ring 0 + kernel R/W.
Download any 360 installer from 360.cn (no account, no CAPTCHA) Spawn it suspended (CREATE_SUSPENDED) Inject shellcode via CreateRemoteThread; shellcode calls CreateFileW("\\.\DsArk") Driver checks IoGetCurrentProcess() image name, sees Qihoo cert, allows open DuplicateHandle the result back to the attacker process TerminateProcess the donor.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / vulnerable driver area.
