---
name: ags-access
description: "This project is a kernel-mode syscall wrapper that enables PROCESS_ALL_ACCESS operations on protected processes without creating real handles."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-access
---

# access

**Author:** btbd
**Source:** mcp-gamehacking/skills/ags-access

## Description

This project is a kernel-mode syscall wrapper that enables PROCESS_ALL_ACCESS operations on protected processes without creating real handles.
It hooks a syscall via .data section modification in the kernel and provides a user-mode DLL wrapper that transparently redirects privileged operations through the driver.
The implementation avoids structured exception handling (SEH) while still performing safe operations, tested against protected game processes like Fortnite.
It is mainly useful for game security researchers studying handleless kernel-mode process access and syscall hooking techniques for bypassing process protection.
