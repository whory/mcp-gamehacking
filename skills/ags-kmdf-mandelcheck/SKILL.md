---
name: ags-kmdf-mandelcheck
description: "This is a compact Windows kernel driver that renders a bitmap on screen after a BSOD event. It is written in C and integrates with boot video routines through a modified BOOTVID interface. The project"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kmdf-mandelcheck
---

# KmdfMandelcheck

**Author:** AnalogFeelings
**Source:** mcp-gamehacking/skills/ags-kmdf-mandelcheck

## Description

This is a compact Windows kernel driver that renders a bitmap on screen after a BSOD event. It is written in C and integrates with boot video routines through a modified BOOTVID interface. The project demonstrates low-level graphics output and crash-time display handling in kernel space with a minimal codebase. It is mainly useful for driver developers and reverse engineers exploring Windows internals and boot-time rendering behavior.
