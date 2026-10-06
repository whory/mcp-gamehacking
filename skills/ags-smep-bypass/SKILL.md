---
name: ags-smep-bypass
description: "This project is a proof of concept for bypassing SMEP (Supervisor Mode Execution Prevention) on Windows. SMEP prevents the kernel from executing code in user-mode pages. This exploit demonstrates tech"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-smep-bypass
---

# Smep Bypass

**Author:** r0keb
**Source:** mcp-gamehacking/skills/ags-smep-bypass

## Description

This project is a proof of concept for bypassing SMEP (Supervisor Mode Execution Prevention) on Windows. SMEP prevents the kernel from executing code in user-mode pages. This exploit demonstrates techniques to disable SMEP by manipulating the CR4 register through ROP chains or vulnerable driver primitives, enabling kernel-mode execution of user-space shellcode. It is aimed at kernel exploitation researchers studying hardware security feature bypass techniques.
