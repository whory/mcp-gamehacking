---
name: ags-nmi-callback-handler
description: "A Windows kernel driver demonstrating how Non-Maskable Interrupts (NMIs) can be used for stack walking by locating the MACHINE_FRAME structure from the iretq ISR return to determine the interrupted in"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nmi-callback-handler
---

# nmi callback handler

**Author:** donnaskiez
**Source:** mcp-gamehacking/skills/ags-nmi-callback-handler

## Description

A Windows kernel driver demonstrating how Non-Maskable Interrupts (NMIs) can be used for stack walking by locating the MACHINE_FRAME structure from the iretq ISR return to determine the interrupted instruction pointer.
It registers an NMI callback handler that captures the interrupted RIP across all processors, enabling detection of code executing from suspicious memory regions.
It is mainly useful for anti-cheat developers and kernel security researchers studying NMI-based thread stack walking as a cheat detection technique.
