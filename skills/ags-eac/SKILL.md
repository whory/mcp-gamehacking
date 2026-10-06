---
name: ags-eac
description: "This archive is a mixed Easy Anti-Cheat reference bundle containing both reversed easyanticheat.sys code and an accompanying EAC or EOS SDK drop."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eac
---

# EAC

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-eac

## Description

This archive is a mixed Easy Anti-Cheat reference bundle containing both reversed easyanticheat.sys code and an accompanying EAC or EOS SDK drop.
The reversed source focuses on kernel callback logic such as driver dispatch validation, Process Hacker driver detection, blacklisted driver checks, ntoskrnl patch scanning, and driver hashing routines.
Alongside that, the EAC_SDK tree includes SDK binaries, headers, and tools such as EOS_FileDecryptionTool, so the repository serves more as a study pack for EAC internals and integration artifacts than as a single executable project.
It is mainly useful for reverse engineers studying Easy Anti-Cheat kernel heuristics, driver integrity monitoring, and the surrounding SDK surface used by EAC and EOS deployments.
