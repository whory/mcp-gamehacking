---
name: ags-sig-flip
description: "This project is a tool for patching authenticode signed PE files (exe, dll, sys ..etc) without invalidating or breaking the existing signature."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-sig-flip
---

# SigFlip

**Author:** med0x2e
**Source:** mcp-gamehacking/skills/ags-sig-flip

## Description

This project is a tool for patching authenticode signed PE files (exe, dll, sys ..etc) without invalidating or breaking the existing signature.
SigInject encrypts and injects shellcode into a PE file's [WIN_CERTIFICATE] certificate table, the encryption key is printed out for usage with a basic BOF/C/C# loader (SigLoader), SigInject saves changes to a modified PE file and keeps its signature and certificate validity intact.
It is mainly useful for low-level Windows, Linux, and mobile researchers working in the some tricks / windows ring3 area.
