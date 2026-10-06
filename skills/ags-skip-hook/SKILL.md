---
name: ags-skip-hook
description: "A header-only C++ library that creates function call trampolines which skip the first instruction of a target function, bypassing inline hooks (0xE9 JMP) and breakpoint traps (0xCC INT3) placed by ant"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-skip-hook
---

# SkipHook

**Author:** weak1337
**Source:** mcp-gamehacking/skills/ags-skip-hook

## Description

A header-only C++ library that creates function call trampolines which skip the first instruction of a target function, bypassing inline hooks (0xE9 JMP) and breakpoint traps (0xCC INT3) placed by anti-cheat systems like BattlEye on WinAPI and game functions.
It uses the HDE (Hacker Disassembly Engine) for x86/x64 instruction length decoding to determine the size of the first instruction, then builds a local trampoline that executes the original first instruction and jumps to instruction+1, so the hooked prologue is never executed and return-address checks see a legitimate call origin.
It is mainly useful for cheat developers bypassing anti-cheat API hooks and game security researchers studying trampoline-based hook evasion techniques.
