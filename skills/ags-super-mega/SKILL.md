---
name: ags-super-mega
description: "A shellcode loader that infects legitimate PE executables (.exe and .dll) by injecting a carrier shellcode tightly integrated into the host binary, making static analysis difficult to distinguish from"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-super-mega
---

# SuperMega

**Author:** dobin
**Source:** mcp-gamehacking/skills/ags-super-mega

## Description

A shellcode loader that infects legitimate PE executables (.exe and .dll) by injecting a carrier shellcode tightly integrated into the host binary, making static analysis difficult to distinguish from the original code.
It implements the Cordyceps parasitic injection technique with a web-based project management interface for configuring payloads, anti-emulation strategies, and injection targets.
It is mainly useful for security researchers studying advanced shellcode loading, PE infection techniques, and evasion of static analysis tools.
