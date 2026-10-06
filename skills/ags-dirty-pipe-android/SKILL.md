---
name: ags-dirty-pipe-android
description: "Multi-stage exploit leveraging CVE-2022-0847 (Dirty Pipe) to permanently root Pixel 6 devices by corrupting the kernel module loader through pipe page cache overwrites, injecting ARM64 shellcode paylo"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-dirty-pipe-android
---

# DirtyPipe Android

**Author:** polygraphene
**Source:** mcp-gamehacking/skills/ags-dirty-pipe-android

## Description

Multi-stage exploit leveraging CVE-2022-0847 (Dirty Pipe) to permanently root Pixel 6 devices by corrupting the kernel module loader through pipe page cache overwrites, injecting ARM64 shellcode payloads to patch SELinux and credentials, and automatically installing Magisk v24.3 for persistent root access across reboots.
