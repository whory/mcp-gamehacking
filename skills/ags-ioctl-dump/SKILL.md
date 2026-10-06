---
name: ags-ioctl-dump
description: "This project is a Windows kernel driver for hooking and dumping IOCTL traffic from other device drivers. It records request metadata such as IOCTL code, transport path type, and buffer sizes, and it c"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ioctl-dump
---

# IOCTLDump

**Author:** Kharos102
**Source:** mcp-gamehacking/skills/ags-ioctl-dump

## Description

This project is a Windows kernel driver for hooking and dumping IOCTL traffic from other device drivers. It records request metadata such as IOCTL code, transport path type, and buffer sizes, and it can store input buffer contents while deduplicating repeated combinations. The repository includes both driver and client-side components for selecting target devices and collecting logs in a defined output layout. It is primarily used for reverse engineering proprietary drivers, including anti-cheat interfaces and other security-sensitive kernel communication paths.
