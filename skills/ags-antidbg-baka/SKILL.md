---
name: ags-antidbg-baka
description: "This project is Baka, a Windows anti-debugging library that implements multiple debugger detection techniques. It checks for debugger presence through PEB flags, NtQueryInformationProcess calls, hardw"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-antidbg-baka
---

# antidbg Baka

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-antidbg-baka

## Description

This project is Baka, a Windows anti-debugging library that implements multiple debugger detection techniques. It checks for debugger presence through PEB flags, NtQueryInformationProcess calls, hardware breakpoint detection, timing checks, exception-based detection, and parent process validation. The C/C++ library provides a collection of anti-debug primitives that can be integrated into applications. It is aimed at software protection developers and security researchers studying anti-debugging techniques and their bypass methods.
