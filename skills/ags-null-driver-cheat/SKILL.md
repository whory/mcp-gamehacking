---
name: ags-null-driver-cheat
description: "This project is a Windows 11 adaptation of Null's driver-cheat pattern that hooks NtOpenCompositionSurfaceSectionInfo inside dxgkrnl to create a covert kernel communication path."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-null-driver-cheat
---

# NullDriverCheat

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-null-driver-cheat

## Description

This project is a Windows 11 adaptation of Null's driver-cheat pattern that hooks NtOpenCompositionSurfaceSectionInfo inside dxgkrnl to create a covert kernel communication path.
Its hook installer writes a small jump stub into the export, and the handler accepts structured requests for module-base lookup, process memory read and write operations, and optional GDI drawing helpers sourced from win32k exports.
The archived README explicitly frames it as a modified reimplementation with a different pool tag and the syscall choice intended to reduce immediate detection compared with simpler device-based approaches.
It is mainly useful for reverse engineers studying dxgkrnl export hooks, structured user-kernel messaging, and GDI-assisted overlay or memory helpers in cheat drivers.
