---
name: ags-bug-check2linux
description: "This project is a Windows kernel driver that boots a RISC-V Linux emulator inside a bug check (BSOD) screen. It uses a mini-rv32ima RISC-V emulator, BOOTVID for framebuffer rendering during the bug ch"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-bug-check2linux
---

# BugCheck2Linux

**Author:** NSG650
**Source:** mcp-gamehacking/skills/ags-bug-check2linux

## Description

This project is a Windows kernel driver that boots a RISC-V Linux emulator inside a bug check (BSOD) screen. It uses a mini-rv32ima RISC-V emulator, BOOTVID for framebuffer rendering during the bug check phase, and an embedded device tree and boot image to run a minimal Linux system. It is mainly useful for kernel researchers and enthusiasts exploring creative uses of the Windows bug check environment and embedded emulation from kernel mode.
