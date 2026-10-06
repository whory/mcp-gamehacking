---
name: ags-nt-kernel-walker-lib
description: "This project focuses on user-mode ntoskrnl symbol/struct offset resolver via dbghelp + executable section gadget scanning (e.g., short ROP primitives."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-nt-kernel-walker-lib
---

# NTKernelWalkerLib

**Author:** jsacco
**Source:** mcp-gamehacking/skills/ags-nt-kernel-walker-lib

## Description

This project focuses on user-mode ntoskrnl symbol/struct offset resolver via dbghelp + executable section gadget scanning (e.g., short ROP primitives.
It uses dbghelp to fetch RVAs of exported symbols from ntoskrnl.exe and uses and image mapper that can scan executable sections to find ROP gadgets such as “pop rcx ; ret” or “jmp rax”.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / windows kernel explorer area.
