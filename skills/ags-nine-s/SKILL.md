---
name: ags-nine-s
description: "This project is an ELF injector for the PlayStation 5 that manually maps ELF files into remote processes and executes them in remote threads."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nine-s
---

# NineS

**Author:** buzzer-re
**Source:** mcp-gamehacking/skills/ags-nine-s

## Description

This project is an ELF injector for the PlayStation 5 that manually maps ELF files into remote processes and executes them in remote threads.
It runs a TCP server on port 9033 that accepts a target process name and ELF payload, performing manual mapping including section loading, relocation processing, and thread creation within the target PS5 process.
The C codebase is built using John Törnblom's PS5 SDK and includes a Python helper script for sending injection payloads.
It is mainly useful for console security researchers studying PS5 process injection, ELF manual mapping, and remote code execution on FreeBSD-based game consoles.
