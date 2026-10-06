---
name: ags-ps-notif-routine-unloader
description: "This project is a Windows kernel tool that removes process, thread, and image load notification callbacks registered by anti-cheat and security drivers. It enumerates the PsSetCreateProcessNotifyRouti"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ps-notif-routine-unloader
---

# PsNotifRoutineUnloader

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-ps-notif-routine-unloader

## Description

This project is a Windows kernel tool that removes process, thread, and image load notification callbacks registered by anti-cheat and security drivers. It enumerates the PsSetCreateProcessNotifyRoutine callback array and selectively removes entries belonging to specific drivers, effectively blinding those drivers to process creation events. It is aimed at kernel researchers studying callback manipulation for anti-cheat evasion and defensive callback protection.
