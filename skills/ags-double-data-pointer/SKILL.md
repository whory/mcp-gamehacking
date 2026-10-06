---
name: ags-double-data-pointer
description: "DoubleDataPointer is a Windows kernel communication proof of concept that uses a double-pointer channel between user mode and a manually mapped driver. The implementation is mainly C++ and provides pr"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-double-data-pointer
---

# DoubleDataPointer

**Author:** Astronaut00
**Source:** mcp-gamehacking/skills/ags-double-data-pointer

## Description

DoubleDataPointer is a Windows kernel communication proof of concept that uses a double-pointer channel between user mode and a manually mapped driver. The implementation is mainly C++ and provides primitives for reading and writing virtual and physical memory from kernel context. It also demonstrates stealth-oriented techniques such as page frame number cleanup and pool-related artifact reduction while documenting detection risks. The project targets anti-cheat bypass experimentation and low-level game security research.
