---
name: ags-battleye-shellcode
description: "A collection of reverse-engineered and decompiled BattlEye shellcode modules including AutoHotKey detection, Present hook scanning, and stack-walking routines used by the anti-cheat's runtime integrit"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-battleye-shellcode
---

# battleye shellcode

**Author:** dllcrt0
**Source:** mcp-gamehacking/skills/ags-battleye-shellcode

## Description

A collection of reverse-engineered and decompiled BattlEye shellcode modules including AutoHotKey detection, Present hook scanning, and stack-walking routines used by the anti-cheat's runtime integrity checks.
The decompiled code reveals BattlEye's techniques for detecting automation tools, graphics API hooks on the swap chain, and validating call stacks for suspicious return addresses.
It is mainly useful for anti-cheat researchers studying BattlEye's shellcode-based detection mechanisms and runtime scanning strategies.
