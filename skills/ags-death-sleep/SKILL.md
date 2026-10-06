---
name: ags-death-sleep
description: "This project is a PoC implementation for an evasion technique to terminate the current thread and restore it before resuming execution, while implementing page protection changes during no execution."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-death-sleep
---

# DeathSleep

**Author:** janoglezcampos
**Source:** mcp-gamehacking/skills/ags-death-sleep

## Description

This project is a PoC implementation for an evasion technique to terminate the current thread and restore it before resuming execution, while implementing page protection changes during no execution.
Sleep and obfuscation methods are well known in the maldev community, with different implementations, they have the objective of hiding from memory scanners while sleeping, usually changing page protections and even adding cool features like encrypting the shellcode, but there is another important point to hide our shellcode, and is hiding the current execution thread.
It is mainly useful for anti-cheat engineers and defensive security researchers working in the anti cheat / page protection area.
