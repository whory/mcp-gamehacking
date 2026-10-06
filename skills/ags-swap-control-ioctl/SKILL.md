---
name: ags-swap-control-ioctl
description: "This project is a Windows kernel proof of concept for intercepting a driver's IRP_MJ_DEVICE_CONTROL dispatch routine. It demonstrates dispatch-pointer redirection with a trampoline approach and forwar"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-swap-control-ioctl
---

# Swap control ioctl

**Author:** Barracudach
**Source:** mcp-gamehacking/skills/ags-swap-control-ioctl

## Description

This project is a Windows kernel proof of concept for intercepting a driver's IRP_MJ_DEVICE_CONTROL dispatch routine. It demonstrates dispatch-pointer redirection with a trampoline approach and forwards ioctl traffic through custom handling logic. The sample includes process memory copy/allocation/protection request handlers and module base lookup behavior. The primary use case is studying driver communication hooks and anti-cheat detection methods around ioctl interception.
