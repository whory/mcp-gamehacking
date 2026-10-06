---
name: ags-vt-debuger
description: "This project is a hypervisor-based debugger that uses Intel VT-x virtualization to debug programs without triggering standard debugger detection. It places the target under a thin hypervisor that inte"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-vt-debuger
---

# vt debuger

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-vt-debuger

## Description

This project is a hypervisor-based debugger that uses Intel VT-x virtualization to debug programs without triggering standard debugger detection. It places the target under a thin hypervisor that intercepts execution events through VM exits, providing breakpoint, single-step, and memory watch capabilities invisible to anti-debugging techniques. It is aimed at reverse engineers debugging anti-debug protected software using hardware-assisted virtualization.
