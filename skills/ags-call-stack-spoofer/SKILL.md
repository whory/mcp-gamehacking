---
name: ags-call-stack-spoofer
description: "This project is a C++ call-stack spoofing toolkit that aims to make stack-based analysis harder in both user mode and kernel mode. It provides macros and templates for spoofing function frames and pro"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-call-stack-spoofer
---

# CallStack Spoofer

**Author:** Barracudach
**Source:** mcp-gamehacking/skills/ags-call-stack-spoofer

## Description

This project is a C++ call-stack spoofing toolkit that aims to make stack-based analysis harder in both user mode and kernel mode. It provides macros and templates for spoofing function frames and proxying calls through generated shellcode paths. The implementation targets x64 environments and discusses practical constraints such as compiler settings and control-flow protections. The primary use case is anti-analysis and anti-cheat evasion research where stackwalk visibility matters.
