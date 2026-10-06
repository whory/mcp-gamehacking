---
name: ags-gmh5225-evil-mhyprot-cli
description: "This project is a command-line proof of concept for abusing the Genshin Impact mhyprot2.sys driver to perform kernel-privileged memory operations from user mode."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-gmh5225-evil-mhyprot-cli
---

# evil mhyprot cli

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-gmh5225-evil-mhyprot-cli

## Description

This project is a command-line proof of concept for abusing the Genshin Impact mhyprot2.sys driver to perform kernel-privileged memory operations from user mode.
The archived README describes the bug as vulnerable IOCTL paths that expose MmCopyVirtualMemory and memcpy-like behavior, allowing arbitrary read and write of both kernel and user memory once the service is running.
The CLI finds a target process, initializes the vulnerable service and device in mhyprot::init, and then dispatches tests or utility operations through a small driver abstraction, making it a usable front end for experimenting with the issue rather than only a writeup.
It is mainly useful for Windows security researchers studying vulnerable anti-cheat drivers, ring3-to-ring0 memory primitives, and service-based BYOVD workflows.
