---
name: ags-libwsk
description: "This project is a Windows kernel networking library that wraps the Winsock Kernel interface with a socket-style API. It is implemented mainly in C and C++, packaged with NuGet and MSBuild files, and d"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-libwsk
---

# libwsk

**Author:** MiroKaku
**Source:** mcp-gamehacking/skills/ags-libwsk

## Description

This project is a Windows kernel networking library that wraps the Winsock Kernel interface with a socket-style API. It is implemented mainly in C and C++, packaged with NuGet and MSBuild files, and designed for WDK and Visual Studio driver workflows. The code maps familiar user-mode socket operations to kernel-mode WSK functions such as connect, send, recv, and address conversion helpers. It is primarily aimed at kernel driver developers and security researchers who need network I/O in kernel mode with lower integration friction.
