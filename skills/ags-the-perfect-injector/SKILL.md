---
name: ags-the-perfect-injector
description: "This project is a Windows DLL injector in C++ that uses a novel injection technique combining NtCreateThreadEx with a thread-safe shellcode stub that resolves LdrLoadDll at runtime. The injector craft"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-the-perfect-injector
---

# ThePerfectInjector

**Author:** can1357
**Source:** mcp-gamehacking/skills/ags-the-perfect-injector

## Description

This project is a Windows DLL injector in C++ that uses a novel injection technique combining NtCreateThreadEx with a thread-safe shellcode stub that resolves LdrLoadDll at runtime. The injector crafts position-independent shellcode, allocates it in the target process, and creates a remote thread that loads the target DLL without relying on kernel32.LoadLibrary being at a fixed address. It handles edge cases like WoW64 injection and process creation flags. It is aimed at security researchers studying advanced DLL injection techniques and anti-cheat evasion.
