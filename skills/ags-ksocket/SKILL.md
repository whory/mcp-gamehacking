---
name: ags-ksocket
description: "This project is a Windows kernel-mode socket library in C that wraps the Windows Sockets Kernel (WSK) API to provide a simplified BSD-style socket interface for kernel drivers. It supports TCP and UDP"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ksocket
---

# KSOCKET

**Author:** wbenny
**Source:** mcp-gamehacking/skills/ags-ksocket

## Description

This project is a Windows kernel-mode socket library in C that wraps the Windows Sockets Kernel (WSK) API to provide a simplified BSD-style socket interface for kernel drivers. It supports TCP and UDP connections from ring 0 without requiring user-mode components, enabling network communication directly from kernel code. It is aimed at kernel security researchers studying covert kernel-mode network channels and developers building network-capable drivers.
