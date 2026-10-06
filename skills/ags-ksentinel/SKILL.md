---
name: ags-ksentinel
description: "This project is a Linux kernel integrity monitor that watches syscall and critical function hooks for signs of rootkit tampering."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ksentinel
---

# ksentinel

**Author:** MatheuZSecurity
**Source:** mcp-gamehacking/skills/ags-ksentinel

## Description

This project is a Linux kernel integrity monitor that watches syscall and critical function hooks for signs of rootkit tampering.
It is implemented in C as a loadable kernel module and uses function prologue hashing, syscall table validation, and LSTAR checks to detect unauthorized modifications.
The tool supports configurable monitoring intervals, extra symbol targets, and an anti-unload mechanism with an unlock key workflow.
Its primary audience is kernel security researchers and defenders evaluating rootkit detection strategies on Linux systems.
