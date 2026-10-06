---
name: ags-remote-call
description: "This project is a Windows kernel technique that executes user-mode code in an arbitrary target process."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-remote-call
---

# RemoteCall

**Author:** 1401199262
**Source:** mcp-gamehacking/skills/ags-remote-call

## Description

This project is a Windows kernel technique that executes user-mode code in an arbitrary target process.
It chains a kernel APC with KeUserModeCallback, pivots execution through a driver I/O routine, and returns with controlled context restoration.
The C++ implementation avoids allocating RWX shellcode memory in the target process while still enabling callable user-mode execution.
Its main use case is advanced process injection research and evaluation of detection trade-offs in game security environments.
