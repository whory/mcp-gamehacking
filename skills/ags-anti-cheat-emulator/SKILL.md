---
name: ags-anti-cheat-emulator
description: "This project is a Windows kernel anti-cheat simulation driver that runs multiple heuristic detection routines. Written in C++, it scans system threads, stack traces, BigPool allocations, PiDDB cache e"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-anti-cheat-emulator
---

# anti cheat emulator

**Author:** ApexLegendsUC
**Source:** mcp-gamehacking/skills/ags-anti-cheat-emulator

## Description

This project is a Windows kernel anti-cheat simulation driver that runs multiple heuristic detection routines. Written in C++, it scans system threads, stack traces, BigPool allocations, PiDDB cache entries, driver dispatch tables, and suspicious physical-memory handle usage. It also includes hypervisor and kernel mapping checks intended to emulate practical anti-cheat telemetry logic. The code is aimed at researchers studying how kernel-level anti-cheat detection pipelines can be implemented and tested.
