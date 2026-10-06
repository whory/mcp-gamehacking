---
name: ags-inject-all-the-things
description: "injectAllTheThings is an educational Visual Studio project that demonstrates multiple DLL injection methods on Windows. It implements seven techniques, including CreateRemoteThread, NtCreateThreadEx, "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-inject-all-the-things
---

# injectAllTheThings

**Author:** DanielRTeixeira
**Source:** mcp-gamehacking/skills/ags-inject-all-the-things

## Description

injectAllTheThings is an educational Visual Studio project that demonstrates multiple DLL injection methods on Windows. It implements seven techniques, including CreateRemoteThread, NtCreateThreadEx, QueueUserAPC, SetWindowsHookEx, RtlCreateUserThread, SetThreadContext, and reflective DLL loading, with support for both x86 and x64 targets. Each technique is isolated in its own source file, making it easier to study implementation differences and execution tradeoffs. The project is primarily aimed at security learners, reverse engineers, and researchers studying process injection mechanics.
