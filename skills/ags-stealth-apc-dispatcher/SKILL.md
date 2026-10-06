---
name: ags-stealth-apc-dispatcher
description: "This project is a Windows kernel tool demonstrating stealthy APC (Asynchronous Procedure Call) dispatch techniques. It queues APCs to target threads using methods that avoid standard API-level detecti"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-stealth-apc-dispatcher
---

# StealthAPCDispatcher

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-stealth-apc-dispatcher

## Description

This project is a Windows kernel tool demonstrating stealthy APC (Asynchronous Procedure Call) dispatch techniques. It queues APCs to target threads using methods that avoid standard API-level detection, enabling code execution in arbitrary thread contexts without triggering anti-cheat APC monitoring. It is aimed at kernel researchers studying APC-based code execution and anti-cheat APC detection bypass.
