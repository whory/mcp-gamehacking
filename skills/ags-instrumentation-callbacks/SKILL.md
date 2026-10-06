---
name: ags-instrumentation-callbacks
description: "This project is a proof-of-concept library that extends undocumented Windows instrumentation callbacks from user mode."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-instrumentation-callbacks
---

# InstrumentationCallbacks

**Author:** 1027565
**Source:** mcp-gamehacking/skills/ags-instrumentation-callbacks

## Description

This project is a proof-of-concept library that extends undocumented Windows instrumentation callbacks from user mode.
It can intercept kernel-to-user transitions for system calls, APC delivery, exceptions, user-mode callbacks, and new thread initialization events.
The implementation uses C++ and assembly with minimal dependencies centered on NTDLL, and targets x86-64 systems.
Its primary use case is low-level Windows internals research, debugging experiments, and EDR-related telemetry studies.
