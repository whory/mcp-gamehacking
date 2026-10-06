---
name: ags-driver-physical-rw
description: "This project is a Windows kernel driver that exposes IOCTL handlers for physical and virtual memory operations."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-driver-physical-rw
---

# Driver physical rw

**Author:** Vekor64
**Source:** mcp-gamehacking/skills/ags-driver-physical-rw

## Description

This project is a Windows kernel driver that exposes IOCTL handlers for physical and virtual memory operations.
It is written in C++ and includes request structures and user-kernel communication patterns for DeviceIoControl-based clients.
Core routines cover read and write primitives, memory allocation and protection changes, module base lookup, and process-oriented helpers.
It is mainly used for low-level security experimentation and cheat-oriented driver communication studies.
