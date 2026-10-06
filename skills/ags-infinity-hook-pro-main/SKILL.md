---
name: ags-infinity-hook-pro-main
description: "InfinityHookPro-main is a Windows kernel hooking project derived from InfinityHook with added support for physical machines. It targets Windows 7 through Windows 11 and contains low level driver code "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-infinity-hook-pro-main
---

# InfinityHookPro main

**Author:** DearXiaoGui
**Source:** mcp-gamehacking/skills/ags-infinity-hook-pro-main

## Description

InfinityHookPro-main is a Windows kernel hooking project derived from InfinityHook with added support for physical machines. It targets Windows 7 through Windows 11 and contains low level driver code for syscall interception using ETW or CKCL related paths, SSDT context handling, and kernel pattern scanning helpers. The implementation is primarily C or C++ and exposes callback based interception logic for monitoring or modifying system call dispatch flow. It is mainly used by kernel security researchers exploring anti cheat telemetry, syscall monitoring, and hook detection or bypass behavior.
