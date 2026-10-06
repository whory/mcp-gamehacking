---
name: ags-comm-data-pointer-swap
description: "This project is a proof-of-concept kernel communication method built around swapping an internal data pointer in a win32k path instead of exposing a normal device interface."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-comm-data-pointer-swap
---

# Comm Data Pointer Swap

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-comm-data-pointer-swap

## Description

This project is a proof-of-concept kernel communication method built around swapping an internal data pointer in a win32k path instead of exposing a normal device interface.
The archived driver finds a pattern in win32kbase.sys, resolves the target qword pointer, attaches to explorer.exe, and uses InterlockedExchangePointer to replace that pointer with its own handler.
The user-mode side resolves NtDCompositionSetChildRootVisual from win32u.dll to trigger the path, so the repository is really a compact example of pointer-swap communication through a GUI syscall rather than a full framework.
It is mainly useful for Windows kernel researchers studying covert driver communication, pointer redirection inside GUI subsystems, and the tradeoffs of obvious one-off hook placement.
