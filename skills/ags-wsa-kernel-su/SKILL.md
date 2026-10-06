---
name: ags-wsa-kernel-su
description: "WSA-Kernel-SU is a kernel module that provides a /system/xbin/su path for Android kernels, especially in Windows Subsystem for Android setups."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-wsa-kernel-su
---

# WSA Kernel SU

**Author:** LSPosed
**Source:** mcp-gamehacking/skills/ags-wsa-kernel-su

## Description

WSA-Kernel-SU is a kernel module that provides a /system/xbin/su path for Android kernels, especially in Windows Subsystem for Android setups.
It works by hooking selected syscalls and redirecting su execution flow while adjusting credentials and SELinux behavior to provide root access.
The implementation is low-level C code intended for modern kernels and includes options to reduce visibility of superuser functionality.
It targets Android platform modding and security research where kernel-assisted root behavior is required.
