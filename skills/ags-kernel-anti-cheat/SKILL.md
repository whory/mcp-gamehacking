---
name: ags-kernel-anti-cheat
description: "This project is an experimental kernel anti-cheat driver that combines several telemetry ideas instead of focusing on a single detection path."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-anti-cheat
---

# Kernel Anti Cheat

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-kernel-anti-cheat

## Description

This project is an experimental kernel anti-cheat driver that combines several telemetry ideas instead of focusing on a single detection path.
Its main components include NMI-based stack walking with HalSendNMI and RtlCaptureStackBackTrace, system-thread start-address scanning, big-pool inspection, boot UUID collection, simple hypervisor checks, and PiDDBCacheTable enumeration for kdmapper or drvmap timestamps.
The code is explicit about possible false positives and reads like a research sandbox, with separate source files for NMI capture, thread scanning, pool analysis, hypervisor detection, and trace artifacts.
It is mainly useful for defensive researchers studying how kernel anti-cheat prototypes can combine stack forensics, module-range validation, and mapper residue checks in one driver.
