---
name: ags-kernel-eac-be-injector
description: "This project is a kernel-assisted manual mapper designed to inject a DLL into a target game process."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-eac-be-injector
---

# kernel eac be injector

**Author:** JGonz1337
**Source:** mcp-gamehacking/skills/ags-kernel-eac-be-injector

## Description

This project is a kernel-assisted manual mapper designed to inject a DLL into a target game process.
It combines a kernel hook-based command handler with a user-mode mapper that performs relocation, import resolution, section writing, and remote DllMain execution.
The implementation includes kernel memory allocation and exposure routines, pointer swapping hooks, and cleanup steps for mapped payloads.
It is primarily intended for advanced research into anti-cheat-resistant injection workflows on Windows.
