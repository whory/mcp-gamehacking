---
name: ags-wsa-linux-kernel
description: "This project is a mirror and build automation repository for the Windows Subsystem for Android Linux kernel, including superuser-patched variants."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-wsa-linux-kernel
---

# WSA Linux Kernel

**Author:** WSA-Community
**Source:** mcp-gamehacking/skills/ags-wsa-linux-kernel

## Description

This project is a mirror and build automation repository for the Windows Subsystem for Android Linux kernel, including superuser-patched variants.
It maintains branch variants for stock source and KernelSU-enabled source and provides GitHub Actions pipelines for x86_64 and arm64 kernel images.
A helper shell script can patch required KernelSU configuration entries into WSA kernel trees.
It is mainly used by Android and platform security researchers who need reproducible WSA kernel builds and customization.
