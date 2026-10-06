---
name: ags-no-access-protection
description: "A C++ library that protects code sections by marking them as PAGE_NOACCESS using VirtualProtect, then uses a Vectored Exception Handler to catch the resulting access violations and temporarily restore"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-no-access-protection
---

# NO ACCESS Protection

**Author:** weak1337
**Source:** mcp-gamehacking/skills/ags-no-access-protection

## Description

A C++ library that protects code sections by marking them as PAGE_NOACCESS using VirtualProtect, then uses a Vectored Exception Handler to catch the resulting access violations and temporarily restore PAGE_EXECUTE_READ permissions for the faulting page, re-protecting it after execution via single-step trap (STATUS_SINGLE_STEP).
This creates a self-defending code region where any external memory scanner or debugger attempting to read the protected pages triggers an access violation, while legitimate execution proceeds transparently through the VEH trampoline.
It is mainly useful for game security researchers studying PAGE_NOACCESS-based anti-tamper techniques and anti-cheat developers evaluating memory protection strategies against external scanners.
