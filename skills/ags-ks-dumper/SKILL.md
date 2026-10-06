---
name: ags-ks-dumper
description: "This project is a Windows kernel-assisted process dumper that targets protected applications with restricted user-mode handles."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ks-dumper
---

# KsDumper

**Author:** EquiFox
**Source:** mcp-gamehacking/skills/ags-ks-dumper

## Description

This project is a Windows kernel-assisted process dumper that targets protected applications with restricted user-mode handles.
It combines a custom driver and user-mode client to copy a process main module from memory and rebuild PE32 or PE64 headers and sections.
The implementation is written in C++ and documents practical workflow details for driver loading, dump generation, and handling anti-cheat-protected targets.
Its main use case is low-level reverse engineering research focused on protected game binaries and kernel-user interaction patterns.
