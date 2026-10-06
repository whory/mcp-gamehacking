---
name: ags-qemu-unreal-dumper-4-25
description: "This project is a QEMU and memflow port of an Unreal Engine 4.25 dumper for extracting runtime metadata."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-qemu-unreal-dumper-4-25
---

# QemuUnrealDumper 4.25

**Author:** Qemu-Gang
**Source:** mcp-gamehacking/skills/ags-qemu-unreal-dumper-4-25

## Description

This project is a QEMU and memflow port of an Unreal Engine 4.25 dumper for extracting runtime metadata.
It is implemented in C++ and scans target processes to locate object arrays, name pools, and engine-specific offsets.
The tool can dump names and objects and is structured so per-game offsets can be added in engine configuration code.
It is primarily used in Unreal reverse engineering and game security research workflows.
