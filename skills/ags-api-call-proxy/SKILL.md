---
name: ags-api-call-proxy
description: "This project is a Windows API call obfuscation framework that routes user-mode operations through a kernel driver."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-api-call-proxy
---

# APICallProxy

**Author:** MahmoudZohdy
**Source:** mcp-gamehacking/skills/ags-api-call-proxy

## Description

This project is a Windows API call obfuscation framework that routes user-mode operations through a kernel driver.
It is implemented in C/C++ and exposes many file, process, memory, registry, and network actions through DeviceIoControl IOCTL handlers instead of direct API calls.
The repository also includes multiple sample clients demonstrating practical workflows such as APC-based injection, driver loading, and socket communication.
It is intended for low-level security research and controlled experiments on API monitoring evasion and behavioral analysis hardening.
