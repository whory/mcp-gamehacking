---
name: ags-kayn-strike
description: "This project is a custom reflective loader for Cobalt Strike Beacon payloads on Windows. It focuses on spoofing the thread start address and cleaning up loader memory after the beacon entry point runs"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kayn-strike
---

# KaynStrike

**Author:** Cracked5pider
**Source:** mcp-gamehacking/skills/ags-kayn-strike

## Description

This project is a custom reflective loader for Cobalt Strike Beacon payloads on Windows. It focuses on spoofing the thread start address and cleaning up loader memory after the beacon entry point runs to reduce obvious artifacts. The implementation combines C source, low-level assembly routines, and an Aggressor script for building and launching stageless payloads. It is mainly useful for offensive security and detection-evasion research around in-memory payload execution.
