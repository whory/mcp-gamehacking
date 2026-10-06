---
name: ags-csgo-full-kernel
description: "This project is a kernel-mode external framework for interacting with a first-person shooter game from a Windows driver. It is written in C++ as a KMDF driver and includes modules for memory access, d"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-csgo-full-kernel
---

# Csgo Full kernel

**Author:** Sentient111
**Source:** mcp-gamehacking/skills/ags-csgo-full-kernel

## Description

This project is a kernel-mode external framework for interacting with a first-person shooter game from a Windows driver. It is written in C++ as a KMDF driver and includes modules for memory access, drawing helpers, key handling, and game-specific offsets. The architecture demonstrates how cheat logic can be moved into kernel space rather than a conventional user-mode process. It is primarily relevant to game security research on kernel-level attack surfaces and anti-cheat bypass techniques.
