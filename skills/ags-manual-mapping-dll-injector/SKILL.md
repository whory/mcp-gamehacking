---
name: ags-manual-mapping-dll-injector
description: "This project is a Windows DLL injector focused on manual mapping instead of standard LoadLibrary injection."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-manual-mapping-dll-injector
---

# manual mapping dll injector

**Author:** andrew9382
**Source:** mcp-gamehacking/skills/ags-manual-mapping-dll-injector

## Description

This project is a Windows DLL injector focused on manual mapping instead of standard LoadLibrary injection.
It includes both injector and loader components in C/C++, with support for thread hijacking and NtCreateThreadEx-based launch paths.
The implementation covers import resolution, relocation handling, TLS callback execution, and optional exception support for mapped modules.
It also exposes stealth-oriented flags such as header wiping or faking, PEB unlinking, DLL name scrambling, and handle-hijack based process access.
It is intended for advanced game security and malware-analysis researchers studying injection tradecraft and anti-detection behavior.
