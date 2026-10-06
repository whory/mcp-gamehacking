---
name: ags-kernel-cactus
description: "Kernel Cactus is a user-mode offensive toolkit that rides Dell's vulnerable dbutil_2_3.sys driver as its kernel read and write backend."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kernel-cactus
---

# Kernel Cactus

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-kernel-cactus

## Description

Kernel Cactus is a user-mode offensive toolkit that rides Dell's vulnerable dbutil_2_3.sys driver as its kernel read and write backend.
KernelOps.cpp opens \\.\DBUtil_2_3 and builds primitives on IOCTLs 0x9B0C1EC4 and 0x9B0C1EC8, then layers higher-level actions such as ETW disabling, PPL toggling, protected-process termination, token copying, and file deletion on top.
Its command set also includes shellcode-based remote thread injection and thread hijacking paths aimed at processes that are normally blocked from ordinary user-mode tooling.
The repo is therefore better described as a multifunction BYOVD post-exploitation console than as a simple prerequisite note about dbutil_2_3.sys.
