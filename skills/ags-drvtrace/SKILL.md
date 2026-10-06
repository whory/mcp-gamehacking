---
name: ags-drvtrace
description: "This project is drvtrace, a Windows kernel driver tracing tool that logs IRP (I/O Request Packet) traffic to and from specific drivers. It attaches as a filter driver to intercept all IRP requests, lo"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-drvtrace
---

# drvtrace

**Author:** eversinc33
**Source:** mcp-gamehacking/skills/ags-drvtrace

## Description

This project is drvtrace, a Windows kernel driver tracing tool that logs IRP (I/O Request Packet) traffic to and from specific drivers. It attaches as a filter driver to intercept all IRP requests, logging the IRP major/minor function codes, buffer contents, and completion status. The C driver provides runtime visibility into driver communication patterns. It is aimed at reverse engineers and security researchers analyzing driver IOCTL interfaces and device communication protocols.
