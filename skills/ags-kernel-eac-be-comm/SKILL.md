---
name: ags-kernel-eac-be-comm
description: "This project implements a Windows kernel-to-user communication framework that routes commands through a hooked win32k function pointer."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-eac-be-comm
---

# kernel eac be comm

**Author:** JGonz1337
**Source:** mcp-gamehacking/skills/ags-kernel-eac-be-comm

## Description

This project implements a Windows kernel-to-user communication framework that routes commands through a hooked win32k function pointer.
The driver and user client are written in C++ and expose operations such as process base lookup, module lookup, memory read and write, allocation, freeing, and protection changes.
It uses custom request structures, XOR-obfuscated strings, and a compact control protocol to exchange data between ring 3 and ring 0.
The code is geared toward anti-cheat bypass and game memory tooling research against protected environments.
