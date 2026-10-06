---
name: ags-kernel-special-apc-read-process-memory
description: "This project is a teaching example for reading another process from the kernel by queueing a special kernel APC into a runnable thread of the target process."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-special-apc-read-process-memory
---

# Kernel Special APC ReadProcessMemory

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-kernel-special-apc-read-process-memory

## Description

This project is a teaching example for reading another process from the kernel by queueing a special kernel APC into a runnable thread of the target process.
The code stores KeInitializeApc and KeInsertQueueApc, searches for a thread whose APC delivery is still enabled, allocates a nonpaged staging buffer, and lets the APC callback memcpy the target address into kernel memory before copying the result back to user space.
The archived test program compares this APC path against ordinary ReadProcessMemory, and the README explicitly frames the memory read as a demo for special APC insertion mechanics rather than the only purpose of the repository.
It is mainly useful for Windows kernel researchers who want a concrete reference for special APC insertion, thread selection constraints, and kernel-mediated memory collection.
