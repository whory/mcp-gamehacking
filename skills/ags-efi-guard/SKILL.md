---
name: ags-efi-guard
description: "EfiGuard is a portable x64 UEFI bootkit that patches the Windows boot chain to disable PatchGuard and Driver Signature Enforcement during startup."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-efi-guard
---

# EfiGuard

**Author:** Mattiwatti
**Source:** mcp-gamehacking/skills/ags-efi-guard

## Description

EfiGuard is a portable x64 UEFI bootkit that patches the Windows boot chain to disable PatchGuard and Driver Signature Enforcement during startup.
The codebase is primarily C and C++ with EDK2 UEFI components, a loader application, and helper tooling such as EfiDSEFix.
It supports a wide range of Windows x64 versions, uses runtime disassembly for robust patching, and provides multiple boot-time patch modes including SetVariable-based control paths.
This project is mainly aimed at low-level Windows security researchers who study boot integrity, kernel protections, and anti-cheat or driver-loading bypass behavior.
