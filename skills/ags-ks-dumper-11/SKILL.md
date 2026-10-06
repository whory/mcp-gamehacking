---
name: ags-ks-dumper-11
description: "Windows kernel-mode driver and C# GUI application that dumps process memory by communicating with a custom driver (KsDumperDriver.sys) through IOCTL, using KDU for vulnerable driver loading to bypass "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ks-dumper-11
---

# KsDumper 11

**Author:** mastercodeon314
**Source:** mcp-gamehacking/skills/ags-ks-dumper-11

## Description

Windows kernel-mode driver and C# GUI application that dumps process memory by communicating with a custom driver (KsDumperDriver.sys) through IOCTL, using KDU for vulnerable driver loading to bypass Driver Signature Enforcement. Supports PE32/PE64 header parsing, process enumeration via undocumented NT APIs, and includes anti-blocklist registry patches for the Microsoft Vulnerable Driver Blocklist.
