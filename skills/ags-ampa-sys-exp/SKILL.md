---
name: ags-ampa-sys-exp
description: "This project is an exploit for the ampa.sys vulnerable Windows kernel driver. It demonstrates how the driver's insecure IOCTL interface can be abused to gain arbitrary kernel read/write or code execut"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-ampa-sys-exp
---

# ampa.sys exp

**Author:** gmh5225
**Source:** mcp-gamehacking/skills/ags-ampa-sys-exp

## Description

This project is an exploit for the ampa.sys vulnerable Windows kernel driver. It demonstrates how the driver's insecure IOCTL interface can be abused to gain arbitrary kernel read/write or code execution, enabling unsigned driver loading, process privilege escalation, or anti-cheat bypass. The C/C++ exploit automates the vulnerability trigger. It is aimed at BYOVD researchers studying vulnerable driver exploitation for kernel-level access.
