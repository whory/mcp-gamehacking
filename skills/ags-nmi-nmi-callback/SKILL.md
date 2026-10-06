---
name: ags-nmi-nmi-callback
description: "This project is a Windows kernel proof of concept for registering and using Non-Maskable Interrupt (NMI) callbacks. NMI callbacks execute on all cores simultaneously and are used by anti-cheat systems"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nmi-nmi-callback
---

# NMI nmi callback

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-nmi-nmi-callback

## Description

This project is a Windows kernel proof of concept for registering and using Non-Maskable Interrupt (NMI) callbacks. NMI callbacks execute on all cores simultaneously and are used by anti-cheat systems to inspect thread contexts and detect hidden threads or code. This tool demonstrates NMI callback registration and context inspection. It is aimed at kernel researchers studying NMI-based detection used by anti-cheat systems like BattlEye.
