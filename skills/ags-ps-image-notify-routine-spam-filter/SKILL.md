---
name: ags-ps-image-notify-routine-spam-filter
description: "This project is a Windows kernel utility that filters noisy PsImageNotifyRoutine callback events."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ps-image-notify-routine-spam-filter
---

# PsImageNotifyRoutineSpamFilter

**Author:** Staatsgeheim
**Source:** mcp-gamehacking/skills/ags-ps-image-notify-routine-spam-filter

## Description

This project is a Windows kernel utility that filters noisy PsImageNotifyRoutine callback events.
It uses stack walking with RtlWalkFrameChain to distinguish meaningful image-load notifications from common background noise sources.
The implementation is in C for 64-bit Windows driver development and demonstrates practical callback hygiene.
It is useful for kernel monitoring, anti-cheat telemetry collection, and cleaner driver-side event analysis.
