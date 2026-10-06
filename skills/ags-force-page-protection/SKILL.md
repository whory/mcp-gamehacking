---
name: ags-force-page-protection
description: "This project is an x64dbg plugin that forcefully sets page protection for memory mapped views in cases where NtProtectVirtualMemory fails."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-force-page-protection
---

# Force Page Protection

**Author:** changeofpace
**Source:** mcp-gamehacking/skills/ags-force-page-protection

## Description

This project is an x64dbg plugin that forcefully sets page protection for memory mapped views in cases where NtProtectVirtualMemory fails.
It handles views mapped with SEC_NO_CHANGE allocation type, views with incompatible initial protection settings, and defeats anti-patching mechanisms that exploit these NtProtectVirtualMemory limitations by remapping views with the desired protection.
The plugin adds ForcePageProtection (fpp) commands to x64dbg for overriding memory protection restrictions during dynamic analysis.
It is mainly useful for reverse engineers and anti-cheat analysts who need to patch memory regions protected by anti-tamper techniques that abuse memory mapped view restrictions.
