---
name: ags-ke-user-mode-call-back
description: "This project is a Windows kernel demo that invokes user-mode routines through KeUserModeCallback. The driver creates a device interface, receives IOCTL requests, and prepares callback arguments and sh"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ke-user-mode-call-back
---

# KeUserModeCallBack

**Author:** ExpLife0011
**Source:** mcp-gamehacking/skills/ags-ke-user-mode-call-back

## Description

This project is a Windows kernel demo that invokes user-mode routines through KeUserModeCallback. The driver creates a device interface, receives IOCTL requests, and prepares callback arguments and shellcode stubs for both 32-bit and 64-bit paths. It walks process structures such as the PEB and module export tables to resolve user32 and MessageBoxA before dispatching the callback. It is mainly for kernel-to-user transition research and understanding callback-based code execution primitives.
