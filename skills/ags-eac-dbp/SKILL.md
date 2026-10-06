---
name: ags-eac-dbp
description: "EAC Bypass is a Windows proof-of-concept project aimed at debugging applications protected by Easy Anti-Cheat."
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-eac-dbp
---

# EAC dbp

**Author:** Schnocker
**Source:** mcp-gamehacking/skills/ags-eac-dbp

## Description

EAC Bypass is a Windows proof-of-concept project aimed at debugging applications protected by Easy Anti-Cheat.
It combines a kernel-mode driver and a user-mode module to interfere with selected anti-cheat callbacks, minifilter behavior, and control paths.
The implementation is written in C and C++ with Visual Studio and WDK project structure, including user-layer API interception logic.
Its primary use case is reverse engineering and controlled security testing of anti-cheat protected game processes.
