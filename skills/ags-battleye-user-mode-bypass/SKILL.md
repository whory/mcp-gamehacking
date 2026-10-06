---
name: ags-battleye-user-mode-bypass
description: "This project is a proof-of-concept for a user-mode BattlEye bypass that demonstrates a previously vulnerable loading path. It includes a C++ implanter and sample DLL workflow that hooks CreateFileW an"
metadata:
  type: reference
  source: mcp-gamehacking/skills/ags-battleye-user-mode-bypass
---

# battleye user mode bypass

**Author:** HadockKali
**Source:** mcp-gamehacking/skills/ags-battleye-user-mode-bypass

## Description

This project is a proof-of-concept for a user-mode BattlEye bypass that demonstrates a previously vulnerable loading path. It includes a C++ implanter and sample DLL workflow that hooks CreateFileW and manipulates file checks to masquerade a payload as a trusted module. The code is structured as Visual Studio projects with example usage for injecting into a target game process and handling exported hook callbacks. Its primary use is anti-cheat vulnerability research and historical study of user-mode trust validation weaknesses.
