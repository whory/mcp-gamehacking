---
name: ags-cfg-find-hidden-shellcode
description: "This project is a Windows tool that detects hidden shellcode execution by analyzing Control Flow Guard (CFG) bitmap inconsistencies. It scans process memory for executable regions that are valid CFG c"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-cfg-find-hidden-shellcode
---

# CFG FindHiddenShellcode

**Author:** jdu2600
**Source:** mcp-gamehacking/skills/ags-cfg-find-hidden-shellcode

## Description

This project is a Windows tool that detects hidden shellcode execution by analyzing Control Flow Guard (CFG) bitmap inconsistencies. It scans process memory for executable regions that are valid CFG call targets but not part of any known module's legitimate code, indicating injected shellcode that has been marked as CFG-valid. The C implementation demonstrates using CFG metadata as a detection signal. It is aimed at anti-cheat engineers and EDR developers studying CFG-based code injection detection techniques.
