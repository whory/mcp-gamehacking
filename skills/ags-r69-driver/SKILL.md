---
name: ags-r69-driver
description: "This project is a compact kernel communication library that routes read, write, and process-query requests through HalPrivateDispatchTable hooks instead of a conventional device object."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-r69-driver
---

# r69 driver

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-r69-driver

## Description

This project is a compact kernel communication library that routes read, write, and process-query requests through HalPrivateDispatchTable hooks instead of a conventional device object.
The driver replaces HalTimerQueryAuxiliaryCounterFrequency with a handler that pulls a c_packet from the caller trap frame, decodes read_process_memory, write_process_memory, and query_process_data requests, and services them by translating target virtual addresses to physical pages from the process CR3.
A second hook on HalClearLastBranchRecordStack refreshes DirectoryTableBase from the current CR3, while the user-mode wrapper exposes the path through a c_r69 class that wraps NtQueryAuxiliaryCounterFrequency and can attach to a target process by name.
It is mainly useful for Windows kernel researchers studying syscall-adjacent communication, HalPrivateDispatchTable abuse, and physical-memory-backed process access without a standard IOCTL interface.
