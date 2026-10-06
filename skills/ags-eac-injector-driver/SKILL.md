---
name: ags-eac-injector-driver
description: "This project combines a user client and manually mapped kernel driver that repurpose NtQueryIntervalProfile as a control channel for toggling Easy Anti-Cheat state."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eac-injector-driver
---

# Eac Injector Driver

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-eac-injector-driver

## Description

This project combines a user client and manually mapped kernel driver that repurpose NtQueryIntervalProfile as a control channel for toggling Easy Anti-Cheat state.
The driver replaces HalDispatchTable entries so calls routed through NtQueryIntervalProfile reach a custom handler, then locates EasyAntiCheat.sys threads, suspends or resumes them, and temporarily disables object callbacks at the tracked altitude before restoring them later.
The user-side code builds a small shellcode stub, resolves NtQueryIntervalProfile from ntdll, and sends CODE_DISABLE or CODE_RESTORE requests while also handling DLL-loading workflow around the target process.
It is mainly useful for reverse engineers studying syscall-backed driver communication, HalDispatchTable abuse, and callback or thread manipulation against Easy Anti-Cheat.
