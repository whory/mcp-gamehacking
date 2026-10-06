---
name: ags-dpatch
description: "This project focuses on syscall Dispatcher Patching PoC."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dpatch
---

# dpatch

**Author:** xmmword
**Source:** mcp-gamehacking/skills/ags-dpatch

## Description

This project focuses on syscall Dispatcher Patching PoC.
It does this by first making a mutable/writeable copy of the system call table, overwriting the function pointers in that table with the function pointers that point to the hook functions, and then patching the first several bytes of the dispatcher to make it jump to a custom system call handler.
It is mainly useful for game security researchers and reverse engineers studying offensive techniques working in the cheat / android kernel explorer area.
