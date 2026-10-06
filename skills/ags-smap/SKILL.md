---
name: ags-smap
description: "This project is smap, a Windows kernel-mode shellcode mapper in C that loads position-independent shellcode into kernel memory using a vulnerable signed driver. Unlike full driver mappers, it operates"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-smap
---

# smap

**Author:** btbd
**Source:** mcp-gamehacking/skills/ags-smap

## Description

This project is smap, a Windows kernel-mode shellcode mapper in C that loads position-independent shellcode into kernel memory using a vulnerable signed driver. Unlike full driver mappers, it operates on raw shellcode rather than PE images, making the mapped code harder to detect through PE signature scanning. The tool copies shellcode to kernel pool memory and executes it via the vulnerable driver's arbitrary execution primitive. It is aimed at kernel security researchers studying shellcode-based kernel payloads and detection evasion techniques.
