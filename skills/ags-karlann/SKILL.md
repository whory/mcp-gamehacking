---
name: ags-karlann
description: "This project is a Windows kernel driver proof-of-concept that implements keyboard input injection and Winsock kernel (WSK) network communication from kernel mode. The C driver includes keyboard simula"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-karlann
---

# Karlann

**Author:** hkx3upper
**Source:** mcp-gamehacking/skills/ags-karlann

## Description

This project is a Windows kernel driver proof-of-concept that implements keyboard input injection and Winsock kernel (WSK) network communication from kernel mode. The C driver includes keyboard simulation through Kbd.c and network socket operations through Wsk.c with a libwsk helper library. It is mainly useful for kernel security researchers studying kernel-mode input injection and WSK network communication techniques.
