---
name: ags-nt-user-update-window-tracking-info
description: "This project is a Windows kernel communication framework that repurposes the NtUserUpdateWindowTrackingInfo syscall path as a covert command channel. The kernel component hooks win32k function pointer"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nt-user-update-window-tracking-info
---

# NtUserUpdateWindowTrackingInfo

**Author:** D3DXVECTOR2
**Source:** mcp-gamehacking/skills/ags-nt-user-update-window-tracking-info

## Description

This project is a Windows kernel communication framework that repurposes the NtUserUpdateWindowTrackingInfo syscall path as a covert command channel. The kernel component hooks win32k function pointers and exposes operations such as process memory read and write, pattern scanning, allocation, and pointer swapping through custom request codes. A user-mode client initializes the syscall stub and issues structured commands to interact with target processes. It is primarily geared toward game cheat development and anti-cheat evasion research at the kernel boundary.
