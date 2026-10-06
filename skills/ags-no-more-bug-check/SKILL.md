---
name: ags-no-more-bug-check
description: "This project is a kernel driver that suppresses standard Windows BSOD handling by patching KeBugCheckEx."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-no-more-bug-check
---

# NoMoreBugCheck

**Author:** NSG650
**Source:** mcp-gamehacking/skills/ags-no-more-bug-check

## Description

This project is a kernel driver that suppresses standard Windows BSOD handling by patching KeBugCheckEx.
It overwrites crash entry behavior so fatal errors do not immediately trigger the normal bugcheck path.
The implementation is written in C and C++ for Windows kernel mode with direct code patching and restoration logic.
It is mainly a Windows internals and kernel-hooking experiment that demonstrates the risks of bypassing safety mechanisms.
