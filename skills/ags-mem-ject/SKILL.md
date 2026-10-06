---
name: ags-mem-ject
description: "A minimal Windows DLL injector that embeds a compiled DLL as a raw byte array in the source, then manually maps it into a target process (csgo.exe) entirely from user mode using VirtualAllocEx, WriteP"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mem-ject
---

# MemJect

**Author:** danielkrupinski
**Source:** mcp-gamehacking/skills/ags-mem-ject

## Description

A minimal Windows DLL injector that embeds a compiled DLL as a raw byte array in the source, then manually maps it into a target process (csgo.exe) entirely from user mode using VirtualAllocEx, WriteProcessMemory, and CreateRemoteThread.
The mapper parses PE headers to allocate properly sized memory in the target, copies sections, resolves imports via LoadLibraryA/GetProcAddress, applies relocations, and optionally erases the PE header and entry point after calling DllMain to reduce forensic artifacts.
It is mainly useful for game security researchers studying in-memory DLL injection techniques and PE manual mapping from user mode.
