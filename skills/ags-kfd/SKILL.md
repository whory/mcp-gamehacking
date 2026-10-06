---
name: ags-kfd
description: "This project is kfd, a kernel-level file descriptor exploit framework for iOS/macOS that provides arbitrary kernel read/write primitives through XNU kernel vulnerabilities. It chains multiple bugs to "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-kfd
---

# kfd

**Author:** felix-pb
**Source:** mcp-gamehacking/skills/ags-kfd

## Description

This project is kfd, a kernel-level file descriptor exploit framework for iOS/macOS that provides arbitrary kernel read/write primitives through XNU kernel vulnerabilities. It chains multiple bugs to achieve a stable kernel memory access primitive that can be used for jailbreaking, sandbox escape, or security research. The C implementation targets specific iOS/macOS versions with known kernel vulnerabilities. It is aimed at iOS security researchers and jailbreak developers studying XNU kernel exploitation.
