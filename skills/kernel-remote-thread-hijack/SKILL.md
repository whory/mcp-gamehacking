---
name: kernel-remote-thread-hijack
description: Kernel-level remote thread hijacking -- suspend target thread from kernel, modify context (RIP/RSP), resume. See thread-hijacking-injection for the combined user+kernel reference.
metadata:
  type: redirect
---

# Kernel Remote Thread Hijacking

This topic is covered in:
**[[thread-hijacking-injection]]** -- thread execution hijacking via SuspendThread/SetContext
or QueueUserAPC, covering both user-mode and kernel-mode approaches, with detection focus.

Kernel-specific additions: `PsSuspendThread` / `PsResumeThread` for kernel-mode thread
control, `KeStackAttachProcess` + direct context modification for cross-process kernel
injection, and DKOM-based thread context manipulation.
