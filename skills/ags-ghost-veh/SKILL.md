---
name: ags-ghost-veh
description: "This project is a C++ proof-of-concept that demonstrates stealthy manipulation of the Windows Vectored Exception Handler (VEH) chain. It locates the internal VEH linked list in ntdll, uses RtlEncodePo"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ghost-veh
---

# GhostVEH

**Author:** EvilBytecode
**Source:** mcp-gamehacking/skills/ags-ghost-veh

## Description

This project is a C++ proof-of-concept that demonstrates stealthy manipulation of the Windows Vectored Exception Handler (VEH) chain. It locates the internal VEH linked list in ntdll, uses RtlEncodePointer and RtlDecodePointer for handler pointer obfuscation, and leverages LdrProtectMrdata to unlock the protected MRDATA section for modification. It is mainly useful for security researchers studying VEH internals, anti-debug techniques, and exception handler manipulation on Windows.
