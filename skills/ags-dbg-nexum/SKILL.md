---
name: ags-dbg-nexum
description: "A proof-of-concept shellcode injector that uses the Windows Debugging API and shared memory (file mapping) to inject payloads without calling WriteProcessMemory, VirtualAllocEx, or ReadProcessMemory."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dbg-nexum
---

# DbgNexum

**Author:** dis0rder0x00
**Source:** mcp-gamehacking/skills/ags-dbg-nexum

## Description

A proof-of-concept shellcode injector that uses the Windows Debugging API and shared memory (file mapping) to inject payloads without calling WriteProcessMemory, VirtualAllocEx, or ReadProcessMemory.
It attaches as a debugger, sets hardware breakpoints, and manipulates thread context registers to orchestrate a chain of API calls inside the target process that map and execute the shellcode.
It is mainly useful for security researchers studying advanced injection techniques that evade EDR detection by avoiding traditional memory manipulation APIs.
