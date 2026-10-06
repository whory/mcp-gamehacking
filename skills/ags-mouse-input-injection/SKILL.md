---
name: ags-mouse-input-injection
description: "This project is a lightweight header-only mouse input injection utility for Windows. It relies on the undocumented NtUserInjectMouseInput syscall while keeping an API style similar to mouse_event for "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-mouse-input-injection
---

# mouse input injection

**Author:** M3351AN
**Source:** mcp-gamehacking/skills/ags-mouse-input-injection

## Description

This project is a lightweight header-only mouse input injection utility for Windows. It relies on the undocumented NtUserInjectMouseInput syscall while keeping an API style similar to mouse_event for easier migration. The implementation is minimal C/C++ and designed for quick integration by including a single header and calling wrapper functions. The main use case is input automation and low-level input path research.
