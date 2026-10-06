---
name: ags-v-mkatz
description: "This project focuses on extract Windows credentials directly from VM memory snapshots and virtual disks (LSASS, SAM/LSA, cached creds, NTDS.dit) in-place."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-v-mkatz
---

# VMkatz

**Author:** nikaiw
**Source:** mcp-gamehacking/skills/ags-v-mkatz

## Description

This project focuses on extract Windows credentials directly from VM memory snapshots and virtual disks (LSASS, SAM/LSA, cached creds, NTDS.dit) in-place.
Pulling a single 100 GB disk image would take six days , and every hour of sustained exfil is another chance the SOC spots the anomaly, burns your tunnel, and the whole chain collapses.
It is mainly useful for anti-cheat engineers and defensive security researchers working in the anti cheat / information system & forensics area.
