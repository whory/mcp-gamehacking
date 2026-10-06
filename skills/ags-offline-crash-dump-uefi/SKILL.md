---
name: ags-offline-crash-dump-uefi
description: "This project is a Microsoft EDK2 package for implementing Offline Crash Dump support, where firmware writes a memory dump before or instead of the operating system."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-offline-crash-dump-uefi
---

# OfflineCrashDumpUefi

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-offline-crash-dump-uefi

## Description

This project is a Microsoft EDK2 package for implementing Offline Crash Dump support, where firmware writes a memory dump before or instead of the operating system.
The repository includes shared headers for dump-related GUIDs and structures, `OfflineDumpLib` helpers for locating dump partitions and reading Windows-defined UEFI variables, and `OfflineDumpWriterLib` code for generating dumps with buffering, encryption, and redaction support.
It also ships redistributable and sample UEFI applications such as `OfflineDumpWrite.efi`, benchmark and test components, and a full package layout intended to run in a UEFI DXE environment while still serving as a reference for other firmware stacks.
The archived README makes clear that the code is meant for bring-up, debugging, and device stabilization scenarios rather than retail deployments, so it is most useful for firmware and platform engineers studying how pre-OS crash collection is structured on Windows-capable systems.
