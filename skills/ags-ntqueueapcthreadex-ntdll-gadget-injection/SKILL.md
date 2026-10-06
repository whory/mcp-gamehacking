---
name: ags-ntqueueapcthreadex-ntdll-gadget-injection
description: "This project is a C proof of concept for stealth-oriented code injection using NtQueueApcThreadEx and random NTDLL gadgets."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ntqueueapcthreadex-ntdll-gadget-injection
---

# ntqueueapcthreadex ntdll gadget injection

**Author:** LloydLabs
**Source:** mcp-gamehacking/skills/ags-ntqueueapcthreadex-ntdll-gadget-injection

## Description

This project is a C proof of concept for stealth-oriented code injection using NtQueueApcThreadEx and random NTDLL gadgets.
It searches executable sections of ntdll for suitable pop-and-return sequences and uses them so APC execution returns into shellcode.
The approach makes routine pointers appear more legitimate than classic direct APC injection while documenting likely detection vectors.
Its main use case is offensive tradecraft research and evaluation of anti-cheat or EDR telemetry around APC-based execution.
