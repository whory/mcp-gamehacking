---
name: ags-mod-ex-map
description: "A user-mode DLL injector that manually maps a DLL into a target process by parsing its PE headers, allocating memory with VirtualAllocEx, writing sections via WriteProcessMemory, resolving imports, ap"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mod-ex-map
---

# ModExMap

**Author:** weak1337
**Source:** mcp-gamehacking/skills/ags-mod-ex-map

## Description

A user-mode DLL injector that manually maps a DLL into a target process by parsing its PE headers, allocating memory with VirtualAllocEx, writing sections via WriteProcessMemory, resolving imports, applying relocations, and executing the entry point through a shellcode stub injected via CreateRemoteThread.
The mapper handles both x86 and x64 targets, supports TLS callbacks, and includes PE structure parsing (pestruct.h) for navigating section tables, import directories, and relocation blocks during the manual mapping process.
It is mainly useful for game security researchers studying user-mode manual mapping injection techniques and PE loading internals for anti-cheat evasion.
