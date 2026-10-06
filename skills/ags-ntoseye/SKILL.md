---
name: ags-ntoseye
description: "A Windows kernel debugger for Linux hosts that debugs Windows 10/11 guests running under KVM/QEMU, providing WinDbg-style commands, PDB symbol fetching/parsing, and breakpoint support."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ntoseye
---

# ntoseye

**Author:** dmaivel
**Source:** mcp-gamehacking/skills/ags-ntoseye

## Description

A Windows kernel debugger for Linux hosts that debugs Windows 10/11 guests running under KVM/QEMU, providing WinDbg-style commands, PDB symbol fetching/parsing, and breakpoint support.
It connects via GDB stub to the KVM hypervisor for memory access and register manipulation, essentially functioning as a WinDbg replacement for Linux-based virtualization environments.
It is mainly useful for security researchers performing Windows kernel debugging and introspection from Linux without requiring a Windows host or WinDbg.
