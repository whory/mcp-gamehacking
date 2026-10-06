---
name: ags-ev-communication
description: "A kernel-to-usermode communication framework that uses Windows named events (ZwOpenEvent/ZwSetEvent/ZwWaitForSingleObject) for bidirectional signaling between a kernel driver and user-mode client, wit"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ev-communication
---

# EvCommunication

**Author:** weak1337
**Source:** mcp-gamehacking/skills/ags-ev-communication

## Description

A kernel-to-usermode communication framework that uses Windows named events (ZwOpenEvent/ZwSetEvent/ZwWaitForSingleObject) for bidirectional signaling between a kernel driver and user-mode client, with the driver hooking NtTokenManager to intercept a kernel callback as the initial trigger point.
The driver establishes a shared event loop where the user-mode client signals requests through a named event object, the kernel handler processes memory read/write operations via MmCopyVirtualMemory, and signals completion back through a second event, avoiding traditional IOCTL-based communication that anti-cheats monitor.
It is mainly useful for game security researchers studying stealthy driver communication channels that bypass IOCTL monitoring by anti-cheat systems like BattlEye and EAC.
