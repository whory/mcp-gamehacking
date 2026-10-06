---
name: ags-uwpinject
description: "This project is a command-line injector for launching UWP applications and injecting DLLs at a very early startup stage. It is implemented in C with Win32 and AppModel APIs and uses a debugger-like su"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-uwpinject
---

# uwpinject

**Author:** Francesco149
**Source:** mcp-gamehacking/skills/ags-uwpinject

## Description

This project is a command-line injector for launching UWP applications and injecting DLLs at a very early startup stage. It is implemented in C with Win32 and AppModel APIs and uses a debugger-like suspended launch flow to gain early process control. The repository includes build and environment scripts for Windows toolchains and a straightforward DLL drop-in workflow. Its main use case is UWP reverse engineering, runtime instrumentation, and debugging support.
