---
name: ags-uc-foxi-shared-flush-file-buffers-communication-update
description: "This project is a kernel and user communication sample that repurposes IRP_MJ_FLUSH_BUFFERS on \Driver\PEAUTH as the trigger while the real request data lives in a shared user buffer."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-uc-foxi-shared-flush-file-buffers-communication-update
---

# UCFoxi Shared FlushFileBuffers Communication Update

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-uc-foxi-shared-flush-file-buffers-communication-update

## Description

This project is a kernel and user communication sample that repurposes IRP_MJ_FLUSH_BUFFERS on \Driver\PEAUTH as the trigger while the real request data lives in a shared user buffer.
Its driver entry resolves the target driver object, swaps MajorFunction[IRP_MJ_FLUSH_BUFFERS] with InterlockedExchangePointer, and reloads the shared buffer pointer and client PID from registry values under \Registry\Machine\SOFTWARE\ucflash.
The hook copies a REQUEST_DATA block with MmCopyVirtualMemory, rotates a magic value to keep the session synchronized, and dispatches read, write, protect, alloc, free, module, and main-base operations through helper callbacks backed by physical-memory access code.
It is mainly useful for Windows kernel researchers comparing alternative driver communication channels based on hijacked IRP paths, registry-seeded shared buffers, and lightweight kernel memory services.
