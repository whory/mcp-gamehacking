---
name: ags-launcher-abuser
description: "This project demonstrates a stealth technique for external memory access by abusing the game handle already held by launchers such as Steam and Battle.net. It uses named shared memory for IPC, injects"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-launcher-abuser
---

# launcher abuser

**Author:** Ricardonacif
**Source:** mcp-gamehacking/skills/ags-launcher-abuser

## Description

This project demonstrates a stealth technique for external memory access by abusing the game handle already held by launchers such as Steam and Battle.net. It uses named shared memory for IPC, injects a very small shellcode into the launcher, and hijacks an existing launcher thread instead of creating new handles, modules, threads, or executable pages. The implementation includes x86-to-x64 transition logic and syscall-based NtReadVirtualMemory and NtWriteVirtualMemory operations to read and write target game memory. It is primarily aimed at game security research into low-footprint process interaction and anti-cheat evasion tradeoffs.
