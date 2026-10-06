---
name: ags-rw-socket-driver
description: "rw_socket_driver is a Windows kernel driver that exposes protected process memory read and write operations over network sockets."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-rw-socket-driver
---

# rw socket driver

**Author:** adrianyy
**Source:** mcp-gamehacking/skills/ags-rw-socket-driver

## Description

rw_socket_driver is a Windows kernel driver that exposes protected process memory read and write operations over network sockets.
It is implemented in C and C++ and uses kernel socket communication to exchange commands with a remote client.
The codebase is adapted for manual mapping scenarios and focuses on external memory control without in-process hooks.
It is mainly used in low-level game security research for cheat development experiments and anti-cheat robustness evaluation.
