---
name: ags-detect-zygisk
description: "This project is a proof-of-concept Android detector for identifying Zygisk-style process injection behavior. It implements detection logic in C++ and JNI by forking a child process, attaching with ptr"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-detect-zygisk
---

# DetectZygisk

**Author:** apkunpacker
**Source:** mcp-gamehacking/skills/ags-detect-zygisk

## Description

This project is a proof-of-concept Android detector for identifying Zygisk-style process injection behavior. It implements detection logic in C++ and JNI by forking a child process, attaching with ptrace, and reading PTRACE_GETEVENTMSG artifacts. The repository includes a sample APK and runtime logs showing how several Zygisk forks can be detected while baseline implementations may differ. It is mainly useful for mobile anti-cheat and root-detection research focused on runtime integrity checks.
