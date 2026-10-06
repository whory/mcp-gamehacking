---
name: ags-power-hook
description: "PowerHook is a Windows kernel-mode proof of concept that hooks a processor power-management callback to intercept execution in kernel context. It is implemented in C++ as a KMDF driver and rewires the"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-power-hook
---

# PowerHook

**Author:** Archie-osu
**Source:** mcp-gamehacking/skills/ags-power-hook

## Description

PowerHook is a Windows kernel-mode proof of concept that hooks a processor power-management callback to intercept execution in kernel context. It is implemented in C++ as a KMDF driver and rewires the PRCB IdlePreselect routine while preserving the original handler for cleanup. The hook routine demonstrates thread and process object lookups from kernel space and logs execution context details. This project is mainly useful for Windows internals learning and low-level game security research.
