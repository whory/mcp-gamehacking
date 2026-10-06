---
name: ags-x86ret-spoof
description: "A header-only C++ library for invoking x86 (32-bit) Windows functions with a spoofed return address by routing calls through a JMP DWORD PTR [EBX] gadget found in a target module's code section."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-x86ret-spoof
---

# x86RetSpoof

**Author:** danielkrupinski
**Source:** mcp-gamehacking/skills/ags-x86ret-spoof

## Description

A header-only C++ library for invoking x86 (32-bit) Windows functions with a spoofed return address by routing calls through a JMP DWORD PTR [EBX] gadget found in a target module's code section.
It supports stdcall, cdecl, fastcall, and thiscall calling conventions, making the invoked function see the gadget address as its return address instead of the true caller.
It is mainly useful for game security researchers studying return-address spoofing techniques used by cheats to evade call-stack analysis.
