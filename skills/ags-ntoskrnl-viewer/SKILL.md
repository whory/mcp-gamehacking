---
name: ags-ntoskrnl-viewer
description: "Ntoskrnl_Viewer is a Windows kernel memory viewer that uses symbols to inspect ntoskrnl data from a custom driver and user-mode client. It provides WinDbg-like commands such as db, dw, dd, dq, d, and "
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ntoskrnl-viewer
---

# Ntoskrnl Viewer

**Author:** IcEy-999
**Source:** mcp-gamehacking/skills/ags-ntoskrnl-viewer

## Description

Ntoskrnl_Viewer is a Windows kernel memory viewer that uses symbols to inspect ntoskrnl data from a custom driver and user-mode client. It provides WinDbg-like commands such as db, dw, dd, dq, d, and x to read memory by symbol or address, including exported and unexported kernel symbols. The project is built with C/C++ components across ring-0 and ring-3 modules and targets x64 systems. It is useful for kernel reverse engineering, troubleshooting, and low-level Windows internals study.
