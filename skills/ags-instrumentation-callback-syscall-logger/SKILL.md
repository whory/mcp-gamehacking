---
name: ags-instrumentation-callback-syscall-logger
description: "This project focuses on instrumentation Callback."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-instrumentation-callback-syscall-logger
---

# InstrumentationCallbackSyscallLogger

**Author:** x86matthew
**Source:** mcp-gamehacking/skills/ags-instrumentation-callback-syscall-logger

## Description

This project focuses on instrumentation Callback.
This callback is invoked on every return from a kernel syscall, giving user-mode code the opportunity to inspect each call before execution resumes.
It is mainly useful for anti-cheat engineers and defensive security researchers working in the anti cheat / windows ring3 callback area.
