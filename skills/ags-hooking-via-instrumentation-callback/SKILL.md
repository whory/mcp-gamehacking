---
name: ags-hooking-via-instrumentation-callback
description: "This project is a Windows proof of concept that intercepts syscall returns using the instrumentation callback mechanism (NtSetInformationProcess with ProcessInstrumentationCallback). When set, the cal"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-hooking-via-instrumentation-callback
---

# Hooking via InstrumentationCallback

**Author:** secrary
**Source:** mcp-gamehacking/skills/ags-hooking-via-instrumentation-callback

## Description

This project is a Windows proof of concept that intercepts syscall returns using the instrumentation callback mechanism (NtSetInformationProcess with ProcessInstrumentationCallback). When set, the callback fires on every kernel-to-user transition, allowing inspection or modification of syscall results without patching ntdll stubs. The C/C++ implementation logs intercepted calls and demonstrates how this technique can be used for monitoring or tampering. It is aimed at security researchers studying alternative hooking methods and anti-cheat or EDR evasion techniques.
