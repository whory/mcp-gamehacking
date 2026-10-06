---
name: ags-be-battl-eye-shellcode
description: "This project reimplements recent BattlEye shellcode behavior as a DLL that mimics the anti-cheat's user-mode scan stages."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-be-battl-eye-shellcode
---

# BE BattlEye shellcode

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-be-battl-eye-shellcode

## Description

This project reimplements recent BattlEye shellcode behavior as a DLL that mimics the anti-cheat's user-mode scan stages.
Its worker thread runs hidden system thread checks, KiUserExceptionDispatcher hook detection, module and function integrity checks, signature scanning, and thread scanning in the same sequence shown by the sample shellcode wrapper.
The vectored exception handler setup also registers Win32 and CRT targets such as GetAsyncKeyState, NtUserPeekMessage, NtSetEvent, and sqrtf so the shellcode-style control flow can recover after guarded calls.
It is best described as a study scaffold for reproducing BattlEye shellcode scanning logic rather than a generic shellcode placeholder.
