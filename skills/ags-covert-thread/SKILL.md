---
name: ags-covert-thread
description: "This project creates transparent system threads on Windows that are nearly invisible to system introspection by removing a loaded module from the system page tables."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-covert-thread
---

# CovertThread

**Author:** brew02
**Source:** mcp-gamehacking/skills/ags-covert-thread

## Description

This project creates transparent system threads on Windows that are nearly invisible to system introspection by removing a loaded module from the system page tables.
It sets up a fully controlled custom address space with its own interrupt descriptor table (IDT) and prevents individual thread inspection via non-maskable interrupts (NMIs).
The Windows kernel driver supports creating threads from both outside and within the custom address space with direct function execution requiring no macros or wrapper calls.
It is mainly useful for kernel security researchers studying covert thread execution, page table manipulation, and anti-forensic techniques in Windows drivers.
