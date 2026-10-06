---
name: ags-thread-ject
description: "This project is a proof-of-concept manual DLL injector that hijacks an existing thread in a target process. It validates and maps the DLL payload, prepares loader metadata, patches shellcode with runt"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-thread-ject
---

# ThreadJect

**Author:** D4stiny
**Source:** mcp-gamehacking/skills/ags-thread-ject

## Description

This project is a proof-of-concept manual DLL injector that hijacks an existing thread in a target process. It validates and maps the DLL payload, prepares loader metadata, patches shellcode with runtime addresses, and redirects thread execution to complete injection. The implementation is C++ on Windows with Visual Studio project support and emphasizes low-level control over the injection chain. It is intended for process injection research and for building detection test cases in endpoint security studies.
