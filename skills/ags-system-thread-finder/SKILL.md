---
name: ags-system-thread-finder
description: "A tool that detects hidden and manually mapped system threads by enumerating all threads via NtQuerySystemInformation, checking each kernel thread's start address against loaded driver module ranges, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-system-thread-finder
---

# SystemThreadFinder

**Author:** weak1337
**Source:** mcp-gamehacking/skills/ags-system-thread-finder

## Description

A tool that detects hidden and manually mapped system threads by enumerating all threads via NtQuerySystemInformation, checking each kernel thread's start address against loaded driver module ranges, and flagging threads whose start addresses fall outside any legitimate driver's image region.
Created by reverse engineering BattlEye's thread detection logic, it uses undocumented NT APIs to query thread information and cross-references start addresses with the system module list to identify threads spawned from manually mapped or injected kernel code.
It is mainly useful for anti-cheat researchers studying kernel-level thread detection techniques and identifying stealthy driver-based cheats that spawn system threads from unmapped memory regions.
