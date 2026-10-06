---
name: ags-registry-callbacks
description: "This project is a Windows kernel and user-mode proof of concept that communicates through registry callbacks. It demonstrates registering a callback through a jump gadget in a legitimate module so a m"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-registry-callbacks
---

# registry callbacks

**Author:** 0xGREG
**Source:** mcp-gamehacking/skills/ags-registry-callbacks

## Description

This project is a Windows kernel and user-mode proof of concept that communicates through registry callbacks. It demonstrates registering a callback through a jump gadget in a legitimate module so a manually mapped driver can receive commands. The C and C++ code implements operations such as virtual memory read and write, protected memory patching, process base lookup, and heartbeat checks. It is primarily a reference for kernel communication and anti-cheat evasion research in controlled environments.
